import { Link } from "react-router-dom";
import Title from "../mainTitle/title";
import NewsCard from "./newsCard";
import { newsItems } from "../../data/news";

function LatestNews() {
    const latest = newsItems.slice(0, 3);

    if (latest.length === 0) return null;

    return (
        <div className="section bg-white">
            <div className="section-container">
                <Title title="Latest News"></Title>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {latest.map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Link to="/news" className="font-semibold text-accent-dark hover:text-accent">
                        See all news &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
