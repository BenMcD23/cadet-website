import PageHeader from "../components/pageHeader/pageHeader";
import ContactForm from "../components/contactForm/contactForm";
import { Icon } from "../components/icons/Icon";
import { squadron } from "../data/squadron";
import { usePageMeta } from "../hooks/usePageMeta";

function Detail({ icon, label, children }) {
    return (
        <div className="flex items-start gap-3">
            <Icon name={icon} className="mt-0.5 size-5 shrink-0 text-accent-dark" />
            <div>
                <p className="text-xs font-bold uppercase tracking-wide text-ink/70">{label}</p>
                <div className="text-ink/90">{children}</div>
            </div>
        </div>
    );
}

function Contact() {
    usePageMeta({
        title: "Contact us",
        description: `Contact 317 Squadron RAF Air Cadets in Failsworth. Email, phone, parade nights and a map to ${squadron.address.venue}.`,
    });

    return (
        <>
            <PageHeader
                eyebrow="Get in touch"
                title="Contact us"
                intro="Use the form for joining enquiries and general questions. We're all volunteers, so replies usually come within a few days. If it's urgent on a parade night, ring the squadron."
            />

            <div className="section bg-surface">
                <div className="section-container grid items-start gap-8 lg:grid-cols-5">
                    <div className="space-y-6 lg:col-span-2">
                        <div className="card p-6">
                            <h2 className="text-2xl">Find us</h2>
                            <span className="raf-flash mt-3"></span>
                            <div className="mt-5 space-y-4 text-sm">
                                <Detail icon="mapPin" label="Address">
                                    <a href={squadron.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-accent-dark">
                                        {squadron.address.venue}<br />
                                        {squadron.address.street}<br />
                                        {squadron.address.town}, {squadron.address.postcode}
                                    </a>
                                </Detail>
                                <Detail icon="clock" label="Parade nights">
                                    {squadron.paradeNights.map((n) => (
                                        <span key={n.day} className="block">{n.day} {n.time}</span>
                                    ))}
                                </Detail>
                                <Detail icon="phone" label="Phone (parade nights)">
                                    <a href={squadron.phoneHref} className="font-semibold text-navy hover:text-accent-dark">{squadron.phone}</a>
                                </Detail>
                                <Detail icon="envelope" label="Email">
                                    <a href={`mailto:${squadron.email}`} className="break-all font-semibold text-navy hover:text-accent-dark">{squadron.email}</a>
                                </Detail>
                            </div>
                        </div>

                        <div className="card min-h-[280px]">
                            <iframe
                                title="Map showing 317 Squadron's location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29263.47679096115!2d-2.1712879893655064!3d53.524250203160896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb72d3073f64d%3A0xbe6cac6a7b6a2dcc!2s317%20Squadron%20Air%20Training%20Corps!5e0!3m2!1sen!2suk!4v1723907678744!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "280px" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="card p-6 md:p-8 lg:col-span-3">
                        <h2 className="text-2xl">Send us a message</h2>
                        <span className="raf-flash mt-3"></span>
                        <p className="mb-6 mt-4 text-sm text-ink/70">
                            If you&rsquo;re asking about a young person joining, pick &ldquo;Cadet joining interest&rdquo; so we can
                            check they&rsquo;re in the right age bracket.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
