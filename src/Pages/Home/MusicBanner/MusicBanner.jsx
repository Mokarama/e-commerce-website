
import bannerImg from "../../../../public/bannerImg/musicBannerImg.png"

const MusicBanner = () => {
  return (
    <>
      <div>
        <div className="hero-content md:flex justify-between px-10 bg-black rounded-2xl">
        
          <div className="text-white w-1/2 flex flex-col items-center justify-between">
            <p className="text-green-600 pb-3 text-2xl">Categories</p>
            <h1 className="text-5xl font-bold mb-8 text-center">Enhance Your Music Experience</h1>
            <div className="flex gap-3  my-4">
                <div className="bg-white text-black py-3 px-4 rounded-full text-center ">
                    <h2 className="">23</h2>
                    <p>Hours</p>
                </div>

            <div className="bg-white text-black py-3 px-4 rounded-full text-center ">
                    <h2 className="">23</h2>
                    <p>Hours</p>
                </div>

                  <div className="bg-white text-black py-3 px-4 rounded-full text-center ">
                    <h2 className="">23</h2>
                    <p>Hours</p>
                </div>

                  <div className="bg-white text-black py-3 px-4 rounded-full text-center ">
                    <h2 className="">23</h2>
                    <p>Hours</p>
                </div>

            </div>
            <button className="btn bg-green-700 text-white px-10 mt-3">Buy Now</button>
          </div>

           <div className="w-1/2 rounded-4xl">
             <img
            src={bannerImg}
            className=" rounded-lg"
          />
         </div>


        </div>
      </div>
    </>
  );
};

export default MusicBanner;
