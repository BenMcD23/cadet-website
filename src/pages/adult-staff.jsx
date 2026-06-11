import StaffPics from "../components/staffPics/staffPics"
import PageHeader from "../components/pageHeader/pageHeader";
import { Link } from "react-router-dom";

function Staff() {
    return (
        <>
            <PageHeader
                title="Adult Staff"
                intro="Our squadron is managed by a dedicated group of volunteer staff and civilian committee members.
                    The team has years of experience and is committed to providing cadets with the Air Cadet experience."
            />

            <div className="section bg-surface">
                <div className="section-container">
                    <StaffPics></StaffPics>

                    <div className="mt-10 text-center">
                        <Link to="/join" className="btn-primary">Interested in becoming a staff member?</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Staff;
