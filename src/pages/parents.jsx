import PageHeader from "../components/pageHeader/pageHeader";

import TG21 from "../assets/documents/forms/TG Form 021.docx";
import TG23 from "../assets/documents/forms/TG Form 023.docx";
import KitList from "../assets/documents/Kit List.pdf";

function DownloadButton({ href, label }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            {label}
        </a>
    );
}

function Parents() {
    return (
        <>
            <PageHeader
                title="Parents"
                intro="General information for parents and carers of our cadets."
            />

            <div className="section bg-surface">
                <div className="section-container space-y-8">

                    <div className="card p-6 md:p-8">
                        <h2 className="mb-4 text-2xl font-bold text-navy">Subs</h2>
                        <p className="mb-4 leading-relaxed text-ink/80">
                            We charge £17 per month per cadet. This is to cover costs on the Squadron as well as
                            insurance for the cadets and national camps. Please set up a standing order to pay £17
                            a month to the account as follows:
                        </p>
                        <dl className="mb-4 max-w-md rounded-lg border border-gray-200 bg-surface p-5 [&_dd]:mb-2 [&_dd]:font-semibold [&_dd]:text-navy [&_dt]:text-xs [&_dt]:font-bold [&_dt]:uppercase [&_dt]:tracking-wide [&_dt]:text-ink/60">
                            <dt>Account name</dt>
                            <dd>317 Squadron ATC</dd>
                            <dt>Account number</dt>
                            <dd>90782807</dd>
                            <dt>Sort code</dt>
                            <dd>20-55-41</dd>
                            <dt>Reference</dt>
                            <dd>SUBS/SURNAME.INITIAL</dd>
                            <dt>Amount</dt>
                            <dd>£17 per month</dd>
                        </dl>
                        <p className="text-ink/80">
                            For any issues or enquiries, email{" "}
                            <a href="mailto:treasurer.317@rafac.mod.gov.uk" className="font-semibold text-accent-dark hover:text-accent">
                                treasurer.317@rafac.mod.gov.uk
                            </a>
                        </p>
                    </div>

                    <div className="card p-6 md:p-8">
                        <h2 className="mb-4 text-2xl font-bold text-navy">TG Forms</h2>
                        <p className="mb-4 leading-relaxed text-ink/80">
                            Most out of Squadron activities require a TG 21 form for your child to be able to attend.
                            Check the joining instructions if you are unsure if the event requires a TG 21.
                        </p>
                        <p className="mb-6 leading-relaxed text-ink/80">
                            If your child has any medical conditions, they also require a TG 23 form per medical condition.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <DownloadButton href={TG21} label="TG 21 Form" />
                            <DownloadButton href={TG23} label="TG 23 Form" />
                        </div>
                    </div>

                    <div className="card p-6 md:p-8">
                        <h2 className="mb-4 text-2xl font-bold text-navy">DofE</h2>
                        <p className="mb-6 leading-relaxed text-ink/80">
                            Every year we run lots of DofE expeditions as a Squadron, so expedition dates cannot be
                            changed. Here is the kit list — your child must have every item on it.
                        </p>
                        <DownloadButton href={KitList} label="DofE Kit List" />
                    </div>

                    <div className="card p-6 md:p-8">
                        <h2 className="mb-4 text-2xl font-bold text-navy">The Civilian Committee</h2>
                        <p className="leading-relaxed text-ink/80">
                            The committee is a group of people who meet once a month to discuss funding proposals and
                            upcoming events which the committee organise. Anyone can join — email{" "}
                            <a href="mailto:chair.317@rafac.mod.gov.uk" className="font-semibold text-accent-dark hover:text-accent">
                                chair.317@rafac.mod.gov.uk
                            </a>{" "}
                            for more info.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Parents;
