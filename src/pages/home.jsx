import Header from "../components/homeHeader/header"
import QuickLinkCards from "../components/linkCards/quickLinkCards"
import LatestNews from "../components/news/latestNews"

import Cards from "../components/homeSliderCards/cards"
import Join from "../components/joinHome/join"


function Home() {

    return (
        <div className="m-0">
            <Header/>
            <Cards/>
            <LatestNews/>
            <Join/>
            <QuickLinkCards/>
        </div>
    );
}

export default Home;
