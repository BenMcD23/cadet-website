import StaffPics from "../components/staffPics/staffPics"
import Title from "../components/mainTitle/title";

function Staff() {


    return (
        <>
            <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
                <Title title="Adult Staff"></Title>
                <p className="text-xl leading-7 tracking-tight lg:text-2xl text-white pb-1 px-8">Our squadron is managed by a dedicated group of volunteer staff and civilian committee members.
                    <br/><br/>The team has years of experience and is committed to providing cadets with the Air Cadet experience.
                </p>
                <button className="shift-button">Interested In becoming a staff member?</button>

            </div>
            <StaffPics></StaffPics>
        </>
    );
}

export default Staff;