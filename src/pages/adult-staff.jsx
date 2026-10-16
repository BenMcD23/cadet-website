import StaffPics from "../components/staffPics/staffPics"
import PageHeader from "../components/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

function Staff() {
    usePageMeta({ title: "Adult staff", description: "The volunteer adult staff and civilian instructors who run 317 Squadron RAF Air Cadets in Failsworth." });

    return (
        <>
            <PageHeader
                eyebrow="About us"
                title="Adult staff"
                intro="Our squadron is managed by a dedicated group of volunteer staff and civilian committee members.
                    The team has years of experience and is committed to providing cadets with the Air Cadet experience."
            >
                <Link to="/join" className="btn-primary">Volunteer with us</Link>
            </PageHeader>

            <div className="section bg-surface">
                <div className="section-container">
                    <StaffPics></StaffPics>
                </div>
            </div>
        </>
    );
}

export default Staff;
