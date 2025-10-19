import Banner from "../Banner/Banner";
import BestProducts from "../BestProducts/BestProducts";
import Categories from "../Categories/Categories";
import FlashSales from "../FlashSales/FlashSales";
import MusicBanner from "../MusicBanner/MusicBanner";




const Home = () => {
    return (
        <div className='w-7xl mx-auto'>
            <Banner/>
            <FlashSales/> 
            <Categories/>  
            <BestProducts/> 
            <MusicBanner/>
        </div>
    );
};

export default Home;