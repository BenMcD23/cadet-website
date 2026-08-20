import PageHeader from "../components/pageHeader/pageHeader";
import ContactForm from "../components/contactForm/contactForm";

function Contact() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                intro="Get in touch with the squadron — we'll get back to you as soon as we can."
            />

            <div className="section bg-surface">
                <div className="section-container grid items-stretch gap-8 lg:grid-cols-2">
                    <div className="card min-h-[320px]">
                        <iframe
                            title="Map showing 317 Squadron's location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29263.47679096115!2d-2.1712879893655064!3d53.524250203160896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb72d3073f64d%3A0xbe6cac6a7b6a2dcc!2s317%20Squadron%20Air%20Training%20Corps!5e0!3m2!1sen!2suk!4v1723907678744!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "320px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="card p-6 md:p-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
