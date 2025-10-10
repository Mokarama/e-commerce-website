
import LeftSide from './LeftSlider';
import RightSlider from './RightSider';

const Banner = () => {
    return (
        <>
           <div className='flex '>
            {/* Left side Banner */}
            <div>
              <LeftSide></LeftSide>
            </div>
            {/* //Right side banner */}
            <div>
                <RightSlider></RightSlider>
            </div>
           </div>
        </>
    );
};

export default Banner;