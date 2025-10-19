import Banner from "../Banner/Banner";
import BestProducts from "../BestProducts/BestProducts";
import Categories from "../Categories/Categories";
import ExploreProducts from "../ExploreProducts/ExploreProducts";
import FlashSales from "../FlashSales/FlashSales";
import MusicBanner from "../MusicBanner/MusicBanner";
import NewArrival from "../NewArrival/NewArrival";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className='w-7xl mx-auto'>
            <Banner/>
            <FlashSales/> 
            <Categories/>  
            <BestProducts/> 
            <MusicBanner/>
            <ExploreProducts/>
            <NewArrival/>
            <Services/>
        </div>
    );
};

export default Home;