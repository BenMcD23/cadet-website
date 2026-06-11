import PageHeader from "../components/pageHeader/pageHeader";
import NewsCard from "../components/news/newsCard";
import { newsItems } from "../data/news";

function News() {
    return (
        <>
            <PageHeader
                title="Squadron News"
                intro="The latest news, achievements and upcoming events from 317 Squadron."
            />

            <div className="section bg-surface">
                <div className="section-container">
                    {newsItems.length === 0 ? (
                        <p className="text-center text-lg text-ink/70">No news just yet — check back soon!</p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {newsItems.map((item) => (
                                <NewsCard key={item.id} item={item} />
                            ))}
                        </div>
                    )}

                    <p className="mt-10 text-center text-ink/70">
                        For more, read our{" "}
                        <a href="https://newsletter.317atc.co.uk/" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-dark hover:text-accent">
                            squadron newsletter
                        </a>{" "}
                        or follow us on{" "}
                        <a href="https://www.facebook.com/317atc" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-dark hover:text-accent">
                            Facebook
                        </a>.
                    </p>
                </div>
            </div>
        </>
    );
}

export default News;
