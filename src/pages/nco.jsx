import NCOPics from "../components/ncoPics/ncoPics"
import Title from "../components/mainTitle/title";
import { Link } from "react-router-dom";

function NCO() {

    return (
        <>
        <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
            <Title title="Cadet NCO's" padding="pt-4"></Title>
            <p className="text-xl leading-7 xl:text-2xl text-white pb-1 px-8">
            Some cadets are appointed to roles of power and responsibility as Non-Commissioned Officers (NCOs). Selection for these positions is based on the cadet's performance and commitment to the Squadron and Corps.
            <br/>
            <br/>
            The NCO rank structure mirrors that of the RAF, providing a clear framework of leadership and accountability.
            <br/>
            <br/>
            NCOs are responsible for maintaining cadet standards, as well as overseeing the organization and timings of parade nights.

            </p>
            <Link to="/join"><button className="shift-button">Interested In Joining?</button></Link>
        </div>
            <NCOPics></NCOPics>
        </>
    );
}

export default NCO;