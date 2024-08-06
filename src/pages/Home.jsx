import Header from "../components/homeHeader/header"
import Card from "../components/homeCard/card"
import "./homeStyles.css"

function Home() {
    return (
        <>
            <Header/>
            <div className="card1">
                <Card title="Card1" mainText="test23" height={231} width={80}/>
            </div>
            <div className="cardTop">
                <Card title="Card2" mainText="test23" height={231} width={80}/>
            </div>
            <div className="cardTop">
                <Card title="Card3" mainText="test23" height={231} width={80}/>
            </div>
            <div className="cardTop">
                <Card title="Card4" mainText="test23" height={231} width={80}/>
            </div>
        </>
    );
}

export default Home;