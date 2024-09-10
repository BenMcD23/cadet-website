import Title from "../components/mainTitle/title";
import ContactForm from "../components/contactForm/contactForm";

function Join() {

    return (
        <>
            <div className="text-white bg-dark-blue-main title-hover text-center pb-3 lg:pt-14 mb-2">
                <Title title="Joining Information"></Title>
                <h3 className="text-3xl lg:text-4xl font-bold underline">Joining as a Cadet</h3>
                <p className="text-xl leading-7 lg:text-2xl pb-2 pt-2 px-8">
                    Cadets must be aged 12 and in year 8 or above to join.<br/><br/>The latest you can join the Air Cadets is before your 17th birthday.
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold underline">Joining as Staff Volunteer</h3>
                <p className="text-xl leading-7 lg:text-2xl pb-2 pt-2 px-8">
                    Adults 20 years old or more can join as adult volunteer staff members.<br/><br/>You must have also have lived in the UK for a minimum of 3 years and commit to at least 12 hours a month.
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold underline">To Join</h3>
                <p className="text-xl leading-7 lg:text-2xl pb-2 pt-2 px-8">
                    Fill out this contact form with your information and we will get back to you with more details.
                </p>                
            </div>
            <ContactForm></ContactForm>
        </>
    );
}

export default Join;