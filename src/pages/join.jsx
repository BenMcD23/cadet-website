import PageHeader from "../components/pageHeader/pageHeader";
import Title from "../components/mainTitle/title";
import JoinJourney from "../components/joinJourney/joinJourney";
import Faq from "../components/faq/faq";
import ContactForm from "../components/contactForm/contactForm";
import { usePageMeta } from "../hooks/usePageMeta";

function Join() {
    usePageMeta({
        title: "Join us",
        description: "How to join 317 Squadron RAF Air Cadets in Failsworth as a cadet aged 12 to 17, an adult volunteer or a civilian committee member. Ages, costs, parade nights and what to expect.",
    });

    return (
        <>
            <PageHeader
                eyebrow="Join us"
                title="Joining information"
                intro="Everything you need to know about joining 317 Squadron as a cadet, a staff volunteer or a committee member."
            />

            {/* applications notice */}
            {/* <div className="section-container mt-8">
                <div className="flex items-start gap-3 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4 text-amber-900">
                    <p className="font-semibold">
                        Apologies, but we are not accepting any new cadet applications at the moment.
                        Staff and committee enquiries are still very welcome.
                    </p>
                </div>
            </div> */}

            {/* who can join */}
            <div className="section bg-white">
                <div className="section-container">
                    <Title eyebrow="Eligibility" title="Who can join" />
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {data.map((d) => (
                            <div key={d.title} className="card border-t-4 border-t-accent-dark p-6">
                                <h3 className="mb-3 text-2xl">{d.title}</h3>
                                {d.main.map((line) => (
                                    <p key={line} className="mb-3 text-sm leading-relaxed text-ink/80">{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* how joining works */}
            <div className="section bg-surface">
                <div className="section-container">
                    <Title eyebrow="Step by step" title="How joining works" lead="From first message to passing out takes a few months. Here's what happens in between." />
                    <div className="mt-10">
                        <JoinJourney />
                    </div>
                </div>
            </div>

            {/* contact form */}
            <div className="section bg-white">
                <div className="section-container grid items-start gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Title eyebrow="Step one" title="Get in touch" lead="Tell us who's interested and roughly how old they are. We'll come back to you with the next intake date and what to bring." />
                    </div>
                    <div className="card p-6 md:p-8 lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="section bg-surface">
                <div className="section-container">
                    <Title eyebrow="Questions" title="Frequently asked questions" />
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
        title: `Cadets`,
        main: [
            `Cadets must be aged 12 and in year 8 or above to join.`,
            `The latest you can join the Air Cadets is the day before your 17th birthday.`,
        ],
    },
    {
        title: `Staff volunteers`,
        main: [
            `Adults aged 20 or over can join as adult volunteer staff, in uniform or as a civilian instructor.`,
            `You must have lived in the UK for at least 3 years and be able to commit around 12 hours a month.`,
        ],
    },
    {
        title: `Committee members`,
        main: [
            `Every squadron has a Civilian Committee that looks after fundraising, welfare and promoting the squadron locally.`,
            `It's made up of volunteers, often parents, who give a few hours a month.`,
        ],
    },
];

export default Join;
