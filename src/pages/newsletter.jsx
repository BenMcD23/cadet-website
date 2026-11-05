import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/pageHeader/pageHeader";
import PdfBooklet from "../components/newsletter/PdfBooklet";
import { Icon } from "../components/icons/Icon";
import { currentNewsletter, getNewsletter, newsletters } from "../data/newsletters";
import { usePageMeta } from "../hooks/usePageMeta";
import NotFound from "./404";

// Serves both /newsletter (the current issue) and /newsletter/:id (any issue),
// with the rest of the issues listed underneath either way.
function Newsletter() {
    const { id } = useParams();
    const newsletter = id ? getNewsletter(id) : currentNewsletter;

    // An unknown issue renders the 404 page, but this effect runs after its
    // child's, so it must set the 404 title itself or it would overwrite it.
    usePageMeta(
        newsletter
            ? { title: `Newsletter issue ${newsletter.issue}: ${newsletter.title}`, description: newsletter.description }
            : { title: id ? "Page not found" : "Newsletter" }
    );

    if (id && !newsletter) return <NotFound />;

    const others = newsletters.filter((n) => n.id !== newsletter?.id);

    return (
        <>
            <PageHeader
                eyebrow="Cadet media team"
                title="Newsletter"
                intro={
                    newsletter === currentNewsletter
                        ? "Read the latest issue of the 317 Squadron newsletter below — produced by our cadet media team."
                        : `You're reading issue ${newsletter.issue} from ${newsletter.date}.`
                }
            >
                {newsletter && newsletter !== currentNewsletter && (
                    <Link to="/newsletter" className="btn-secondary">
                        Read the latest issue
                    </Link>
                )}
            </PageHeader>

            {newsletter ? (
                // Keyed so switching issue starts the booklet again from page 1.
                <PdfBooklet key={newsletter.id} newsletter={newsletter} />
            ) : (
                <div className="section-container section text-ink/70">
                    The first issue is on its way. Check back soon.
                </div>
            )}

            {others.length > 0 && (
                <section className="section bg-surface" aria-labelledby="other-issues">
                    <div className="section-container">
                        <h2 id="other-issues" className="text-3xl">
                            {newsletter === currentNewsletter ? "Previous issues" : "Other issues"}
                        </h2>
                        <span className="raf-flash mt-3"></span>
                        <ul className="card mt-6 divide-y divide-gray-200">
                            {others.map((n) => (
                                <li key={n.id}>
                                    <Link
                                        to={n === currentNewsletter ? "/newsletter" : `/newsletter/${n.id}`}
                                        className="flex items-center gap-4 p-5 transition-colors hover:bg-surface md:p-6"
                                    >
                                        <div className="min-w-0 flex-1">
                                            <p className="eyebrow">
                                                Issue {n.issue} · {n.date}
                                                {n === currentNewsletter && " · Latest"}
                                            </p>
                                            <h3 className="mt-1 text-xl md:text-2xl">{n.title}</h3>
                                            {n.description && (
                                                <p className="mt-1 line-clamp-2 text-ink/75">{n.description}</p>
                                            )}
                                        </div>
                                        <Icon name="arrowRight" className="size-5 shrink-0 text-navy" strokeWidth={2} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
}

export default Newsletter;
