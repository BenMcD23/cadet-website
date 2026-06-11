const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

function NewsCard({ item }) {
    return (
        <article className="card flex flex-col">
            {item.image && (
                <img src={item.image} alt="" loading="lazy" className="h-44 w-full object-cover" />
            )}
            <div className="flex grow flex-col p-5">
                <time dateTime={item.date} className="mb-2 inline-block self-start rounded-full bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                    {dateFormat.format(new Date(item.date))}
                </time>
                <h3 className="mb-2 text-lg font-bold text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/80">{item.summary}</p>
                {item.body && (
                    <details className="mt-2 text-sm">
                        <summary className="cursor-pointer font-semibold text-accent-dark hover:text-accent">Read more</summary>
                        <p className="mt-2 leading-relaxed text-ink/80">{item.body}</p>
                    </details>
                )}
                {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto pt-3 text-sm font-semibold text-accent-dark hover:text-accent">
                        Find out more &rarr;
                    </a>
                )}
            </div>
        </article>
    );
}

export default NewsCard;
