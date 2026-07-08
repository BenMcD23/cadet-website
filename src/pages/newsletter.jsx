import PageHeader from "../components/pageHeader/pageHeader";
import PdfBooklet from "../components/newsletter/PdfBooklet";
import current from "../data/currentNewsletter.json";

function Newsletter() {
    return (
        <>
            <PageHeader
                title="Newsletter"
                intro="Read the latest issue of the 317 Squadron newsletter below — produced by our cadet media team."
            >
                <a href="https://newsletter.317atc.co.uk/archive" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                    Read previous issues →
                </a>
            </PageHeader>

            <PdfBooklet newsletter={current} />
        </>
    );
}

export default Newsletter;
