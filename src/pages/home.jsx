import Header from "../components/homeHeader/header"
import QuickLinkCards from "../components/linkCards/quickLinkCards"

import Cards from "../components/homeSliderCards/cards"
import Socials from "../components/socials/socials"
import Join from "../components/joinHome/join"


function Home() {

    return (
        <div className="m-0">
            <Header/>
            <Cards/>
            <Socials/>
            <Join/>
            <QuickLinkCards/>
        </div>
    );
}

export default Home;
