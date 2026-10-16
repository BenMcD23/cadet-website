import NCOPics from "../components/ncoPics/ncoPics"
import PageHeader from "../components/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

function NCO() {
    usePageMeta({ title: "Cadet NCOs", description: "The cadet Non-Commissioned Officers of 317 Squadron RAF Air Cadets: Flight Sergeants, Sergeants and Corporals." });

    return (
        <>
            <PageHeader
                eyebrow="About us"
                title="Cadet NCOs"
                intro="Some cadets are appointed to roles of power and responsibility as Non-Commissioned Officers (NCOs).
                    Selection is based on the cadet's performance and commitment to the Squadron and Corps.
                    The NCO rank structure mirrors that of the RAF, and NCOs are responsible for maintaining cadet
                    standards as well as overseeing the organisation and timings of parade nights."
            >
                <Link to="/join" className="btn-primary">How to join</Link>
            </PageHeader>

            <div className="section bg-surface">
                <div className="section-container">
                    <NCOPics></NCOPics>
                </div>
            </div>
        </>
    );
}

export default NCO;
