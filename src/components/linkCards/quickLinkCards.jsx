import { Link } from "react-router-dom";
import Title from "../mainTitle/title";
import { Icon } from "../icons/Icon";

const links = [
    { icon: "chat", title: "Contact us", text: "Questions about joining or anything else", to: "/contact" },
    { icon: "calendar", title: "This month's programme", text: "What's on each parade night", to: "/programme" },
    { icon: "newspaper", title: "Newsletter", text: "News from the cadet media team", to: "/newsletter" },
    { icon: "home", title: "Parents and carers", text: "Subs, TG forms and kit lists", to: "/parents" },
    { icon: "lock", title: "317 Cadet Portal", text: "Log in for squadron resources", href: "https://cadet-portal.317atc.co.uk/" },
    { icon: "bag", title: "Squadron store", text: "Hoodies, polos and kit", href: "https://317atc.sumupstore.com/" },
];

const tileClasses = "group flex items-start gap-4 rounded-md border border-gray-200 bg-white p-5 transition-colors hover:border-accent-dark focus-visible:border-accent-dark";

function TileContent({ l }) {
    return (
        <>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy text-accent">
                <Icon name={l.icon} className="size-6" />
            </span>
            <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 font-display text-xl font-bold uppercase leading-none text-navy">
                    {l.title}
                    {l.href && <Icon name="external" className="size-3.5 text-ink/40" strokeWidth={2} />}
                </span>
                <span className="mt-1 block text-sm text-ink/70">{l.text}</span>
            </span>
            <Icon name="arrowRight" className="mt-1 size-5 shrink-0 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-accent-dark" strokeWidth={2} />
        </>
    );
}

function LinkCards() {
    return (
        <section className="section bg-surface">
            <div className="section-container">
                <Title eyebrow="Quick links" title="Find what you need" />

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {links.map((l) =>
                        l.href ? (
                            <a key={l.title} href={l.href} target="_blank" rel="noopener noreferrer" className={tileClasses}>
                                <TileContent l={l} />
                            </a>
                        ) : (
                            <Link key={l.title} to={l.to} className={tileClasses}>
                                <TileContent l={l} />
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default LinkCards;
