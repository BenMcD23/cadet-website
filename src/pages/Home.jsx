import Header from "../components/homeHeader/header"
import Card from "../components/homeCard/card"
import ClickCard from "../components/clickCards/clickCard"

import "./homeStyles.css"

function Home() {
    return (
        <>
            <Header/>
            {/* <div className="cards">
                <Card secondClass="top-card" title="About Us" mainText="Here at 317 atc, we develop people for their future, we do this by providing them with hard and soft skills. Some of these skills apply to everything in life like teamwork and leadership, We also team things that are more specific such as flying or shooting." height={230} width={80}/>
                <Card secondClass="left-long-card" title="Activities" mainText="The Air Cadets offer a wide range of activities including flying, shooting, RAF visits, adventure training, DofE and many more." height={645} width={30}/>
                <Card secondClass="right" title="Aviation" mainText="The Air Cadets has 2 types of aircraft which is available for the cadets to fly. We fly the Grob Tutor T1, which is a propellor powered aircraft and the Viking T1 which is an unpowered glider." height={250} width={48}/>
                <Card secondClass="right" title="Volunteers" mainText="Adult volunteers are vital to the Air Cadets. Our volunteers serve as role models, instructors, and leaders, guiding cadets in developing their skills and achieving their potential." height={250} width={48}/>
            </div> */}
            
            <ClickCard/>
        </>
    );
}

export default Home;