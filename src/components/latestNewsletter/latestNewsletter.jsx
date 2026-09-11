import { Link } from "react-router-dom";
import Title from "../mainTitle/title";
import { Icon } from "../icons/Icon";
import current from "../../data/currentNewsletter.json";

function LatestNewsletter() {
    return (
        <section className="section bg-white">
            <div className="section-container grid items-start gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <Title
                        eyebrow="Squadron newsletter"
                        title="Latest issue"
                        lead="Written and put together by our cadet media team, with news from camps, competitions and parade nights."
                    />
                </div>
                <article className="card border-l-4 border-l-maroon p-6 md:p-8 lg:col-span-3">
                    <p className="eyebrow">Issue {current.issue} · {current.date}</p>
                    <h3 className="mt-2 text-3xl md:text-4xl">{current.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/80">{current.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link to="/newsletter" className="btn-primary">
                            Read it online <Icon name="arrowRight" className="size-4" strokeWidth={2} />
                        </Link>
                        <a href={current.pdfPath} download className="btn-outline">
                            <Icon name="download" className="size-4" strokeWidth={2} /> Download PDF
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default LatestNewsletter;
