import { Link } from "react-router-dom";

const HeroHome = () => {
    return(
        <div className="bg-home bg-cover bg-center h-screen font-poppins flex items-center justify-end">
            <div className="bg-bege p-12 max-w-lg mr-10">
                <p className="font-semibold text-sm">New Arrival</p>
                <h1 className="text-primary font-bold text-4xl mt-2">Discover Our New Collection</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="bg-primary text-white hover:bg-amber-700 transition-colors font-poppins px-16 py-4 mt-8">
                    <Link to="/shop">
                        BUY NOW
                    </Link>
                </button>    
            </div>
        </div>
    );
};

export default HeroHome;
