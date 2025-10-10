import LeftSlider from "./LeftSlider";
import RightSlider from "./RightSlider";



const Banner = () => {
    return (
        <>
           <div className='flex justify-center py-5'>
            {/* Left side Banner */}
            <div className=' w-1/4'>
             <LeftSlider></LeftSlider>
            </div>
            {/* //Right side banner */}
            <div className=' w-3/4'>
                <RightSlider></RightSlider>
            </div>
           </div>
        </>
    );
};

export default Banner;