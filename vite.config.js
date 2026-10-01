import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import pageMeta from './src/data/pageMeta.js'

const escapeHtml = (str) => str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Emit a copy of index.html per route (e.g. programme.html) with that page's
// title and description, so search engines don't show the same snippet everywhere.
function perRouteHtml() {
  return {
    name: 'per-route-html',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const index = bundle['index.html']
      if (!index) return
      const html = String(index.source)

      for (const [route, meta] of Object.entries(pageMeta)) {
        const page = html
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
          .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeHtml(meta.description)}$2`)

        if (route === '/') {
          index.source = page
        } else {
          this.emitFile({ type: 'asset', fileName: `${route.slice(1)}.html`, source: page })
        }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), perRouteHtml()],
  assetsInclude: ["**/*.JPG", "**/*.PNG", "**/*.docx", "**/*.xlsx", "**/*.pptx"],
})
