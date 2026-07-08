import PageHeader from "../components/pageHeader/pageHeader";
import Title from "../components/mainTitle/title";
import JoinJourney from "../components/joinJourney/joinJourney";
import Faq from "../components/faq/faq";
import ContactForm from "../components/contactForm/contactForm";

function Join() {
    return (
        <>
            <PageHeader
                title="Joining Information"
                intro="Everything you need to know about joining 317 Squadron — as a cadet, a staff volunteer or a committee member."
            />

            {/* applications notice */}
            <div className="section-container mt-8">
                <div className="flex items-start gap-3 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 text-amber-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    {/* <p className="font-semibold">
                        Apologies, but we are not accepting any new cadet applications at the moment.
                        Staff and committee enquiries are still very welcome.
                    </p> */}
                </div>
            </div>

            {/* who can join */}
            <div className="section bg-white">
                <div className="section-container">
                    <Title title="Who Can Join"></Title>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {data.map((d) => (
                            <div key={d.title} className="card p-6">
                                <h3 className="mb-3 text-lg font-bold text-navy">{d.title}</h3>
                                {d.main.map((line) => (
                                    <p key={line} className="mb-3 text-sm leading-relaxed text-ink/80">{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* contact form */}
            <div className="section bg-surface">
                <div className="section-container">
                    <Title title="Get In Touch"></Title>
                    <div className="card mx-auto mt-8 max-w-2xl p-6 md:p-8">
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* how joining works */}
            <div className="section bg-white">
                <div className="section-container">
                    <Title title="How Joining Works"></Title>
                    <div className="mt-10">
                        <JoinJourney />
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="section bg-surface">
                <div className="section-container">
                    <Title title="Frequently Asked Questions"></Title>
                    <div className="mt-8">
                        <Faq />
                    </div>
                </div>
            </div>
        </>
    );
}

const data = [
    {
        title: `Joining as a Cadet`,
        main: [
            `Cadets must be aged 12 and in year 8 or above to join.`,
            `The latest you can join the Air Cadets is the day before your 17th birthday.`,
        ],
    },
    {
        title: `Joining as a Staff Volunteer`,
        main: [
            `Adults 20 years old or more can join as adult volunteer staff members.`,
            `You must have also lived in the UK for a minimum of 3 years and commit to at least 12 hours a month.`,
        ],
    },
    {
        title: `Joining as a Committee Member`,
        main: [
            `Every squadron has a Civilian Committee which has responsibilities to look after the funding of the squadron, deal with welfare issues and help the promotion of the squadron to the public.`,
            `The committee is made up of volunteers, who on average give a few hours a month.`,
        ],
    },
];

export default Join;
