import Header from "../components/homeHeader/header"
import Card from "../components/homeCard/card"
import "./homeStyles.css"

function Home() {
    return (
        <>
            <Header/>
            <div>
                <Card secondClass="top-card" title="Card1" mainText="test23" height={230} width={80}/>
                <Card secondClass="left-long-card" title="Card1" mainText="test23" height={600} width={30}/>
                <Card secondClass="right" title="Card1" mainText="test23" height={250} width={48}/>
                <Card secondClass="right" title="Card2" mainText="test23" height={250} width={48}/>
            </div>
        </>
    );
}

export default Home;