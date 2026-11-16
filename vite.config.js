import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

import pageMeta from './src/data/pageMeta.js'
import { squadron } from './src/data/squadron.js'

const escapeHtml = (str) => str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// The home page's header photo is its largest paint, but in a single-page app the
// browser only finds it once the JS has loaded and React has rendered. Preload
// it from the HTML instead. The URLs are hashed at build time, so they are read
// back out of the built header code: the phone (2:3 crop, ends 1060w) and wide
// (ends 2400w) srcsets imagetools made for sqn_photo.webp.
const HERO_SRCSET = /\/assets\/sqn_photo-[^\s`'"]+ \d+w(?:, \/assets\/sqn_photo-[^\s`'"]+ \d+w)*/g

function heroPreloads(bundle) {
  const found = new Set()
  for (const file of Object.values(bundle)) {
    if (file.type === 'chunk') for (const m of file.code.matchAll(HERO_SRCSET)) found.add(m[0])
  }
  const phone = [...found].find((s) => s.endsWith(' 1060w'))
  const wide = [...found].find((s) => s.endsWith(' 2400w'))
  if (!phone || !wide) return null
  const link = (srcset, media) =>
    `<link rel="preload" as="image" imagesrcset="${srcset}" imagesizes="100vw" media="${media}" fetchpriority="high" />`
  return `  ${link(phone, '(max-width: 767px)')}\n    ${link(wide, '(min-width: 768px)')}\n  </head>`
}

// Emit a copy of index.html per route (e.g. programme.html) with that page's
// title, description and canonical URL, so search engines index each page as
// itself rather than as a duplicate of the home page.
function perRouteHtml() {
  return {
    name: 'per-route-html',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const index = bundle['index.html']
      if (!index) return
      const html = String(index.source)
      const preloads = heroPreloads(bundle)
      // Not fatal: the photo still loads, just later.
      if (!preloads) this.warn('Header photo srcsets not found in the bundle; the home page will not preload it.')

      for (const [route, meta] of Object.entries(pageMeta)) {
        const url = squadron.siteUrl + route
        const page = html
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
          .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeHtml(meta.description)}$2`)
          .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`)

        if (route === '/') {
          index.source = preloads ? page.replace('</head>', preloads) : page
        } else {
          this.emitFile({ type: 'asset', fileName: `${route.slice(1)}.html`, source: page })
        }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  // imagetools makes the smaller copies that `?w=…&as=srcset` imports ask for,
  // so phones download photos their own size. It only acts on imports with a
  // query: plain image imports are untouched.
  plugins: [react(), imagetools(), perRouteHtml()],
  assetsInclude: ["**/*.JPG", "**/*.PNG", "**/*.docx", "**/*.xlsx", "**/*.pptx"],
})
