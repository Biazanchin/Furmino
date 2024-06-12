import Carrosel from "../components/Home/Carrosel";
import HeroHome from "../components/Home/HeroHome";
import Products from "../components/Home/Products";
import Setup from "../components/Home/Setup";
import Spaces from "../components/Home/Spaces";

const Home = () => {
    return (
        <div>
            <HeroHome/>
            <Spaces/>
            <Products/>
            <Carrosel/>
            <Setup/>
        </div>
    );
};

export default Home;