import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FlashSales from "../FlashSales/FlashSales";




const Home = () => {
    return (
        <div className='w-7xl mx-auto'>
            <Banner/>
            <FlashSales/> 
            <Categories/>   
        </div>
    );
};

export default Home;