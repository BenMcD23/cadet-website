import Header from "../components/homeHeader/header"
import KeyFacts from "../components/keyFacts/keyFacts"
import Cards from "../components/homeSliderCards/cards"
import LatestNewsletter from "../components/latestNewsletter/latestNewsletter"
import Join from "../components/joinHome/join"
import QuickLinkCards from "../components/linkCards/quickLinkCards"
import { usePageMeta } from "../hooks/usePageMeta";

function Home() {
    usePageMeta();

    return (
        <>
            <Header/>
            <KeyFacts/>
            <Cards/>
            <LatestNewsletter/>
            <Join/>
            <QuickLinkCards/>
        </>
    );
}

export default Home;
