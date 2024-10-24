import Header from "../components/homeHeader/header"
import LinkCards from "../components/linkCards/linkCards"
import Cards from "../components/homeSliderCards/cards"
import Join from "../components/joinHome/join"


function Home() {

    return (
        <>
        <div className="m-0">
            <Header/>
            <Cards/>
            <Join/>
            <LinkCards/>
        </div>
        </>
    );
}

export default Home;