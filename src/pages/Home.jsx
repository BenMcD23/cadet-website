import Header from "../components/homeHeader/header"
import LinkCards from "../components/linkCards/linkCards"
import ClickCard from "../components/clickCards/clickCard"
import Footer from "../components/footer/footer"
import Form from "../components/contactForm/contactForm"
import Divider from "../components/largeDivider/divider"
import Cards from "../components/sliderCards/cards"
import Join from "../components/joinHome/join"

import "./homeStyles.css"

import Parade from "../assets/parade.jpeg"
import Drill from "../assets/317_drill.png"
import sqn from "../assets/sqn_photo.JPG"

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
            
            {/* <ClickCard 
            title1="About Us" mainText1="Here at 317 atc, we develop people for their future, we do this by providing them with hard and soft skills. Some of these skills apply to everything in life like teamwork and leadership, We also team things that are more specific such as flying or shooting."
            title2="What we do" mainText2="We provide opporunities from flying and gliding, shooting, adventure training, DofE all the way down to development opportunies for the individual. We want to give cadets opportunites to improve themselvs while enjoying themselves."
            title3="Volunteers" mainText3="We rely on our adult volunteers for the running of the squadron. They organise activities, educate the cadets and ensure each parade night it runs smoothly. They are vital to our work in the Air Cadets."
            images={[Parade, Drill, sqn]}/> */}

            <Cards/>
            <Join/>
            {/* <Divider/> */}
            <LinkCards/>
            <Footer/>
        </>
    );
}

export default Home;