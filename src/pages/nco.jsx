import NCOPics from "../components/ncoPics/ncoPics"
import PageHeader from "../components/pageHeader/pageHeader";
import { Link } from "react-router-dom";

function NCO() {
    return (
        <>
            <PageHeader
                title="Cadet NCO's"
                intro="Some cadets are appointed to roles of power and responsibility as Non-Commissioned Officers (NCOs).
                    Selection is based on the cadet's performance and commitment to the Squadron and Corps.
                    The NCO rank structure mirrors that of the RAF, and NCOs are responsible for maintaining cadet
                    standards as well as overseeing the organisation and timings of parade nights."
            />

            <div className="section bg-surface">
                <div className="section-container">
                    <NCOPics></NCOPics>

                    <div className="mt-10 text-center">
                        <Link to="/join" className="btn-primary">Interested in joining?</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NCO;
