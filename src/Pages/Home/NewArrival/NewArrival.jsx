import { FaArrowRight } from "react-icons/fa";
import img3 from "../../../../public/newArrivalImg/speeker.jpg"
import img1 from "../../../../public/newArrivalImg/img3.jpg"
import img2 from "../../../../public/newArrivalImg/women.jpg"
import img4 from "../../../../public/newArrivalImg/perfium.jpg"

const NewArrival = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Section Header */}
      <div className="mb-8">
        <p className="text-red-500 font-semibold flex items-center gap-2">
          <span className="h-2 w-2 bg-red-500 rounded-full"></span> Featured
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">New Arrival</h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* PlayStation (Left big box) */}
        <div className="lg:col-span-2 relative group overflow-hidden rounded-xl h-[380px] md:h-[420px]">
          <img
            src={img1}
            alt="PlayStation 5"
            className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
          <div className="absolute bottom-5 left-5 text-white transition-all duration-500 group-hover:translate-y-[-5px]">
            <h3 className="text-2xl font-semibold">PlayStation 5</h3>
            <p className="text-sm text-gray-300 max-w-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-2 flex items-center gap-2 text-sm font-semibold hover:underline">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Women’s Collections */}
          <div className="relative group overflow-hidden rounded-xl h-[180px] md:h-[200px]">
            <img
              src={img2}
              alt="Women's Collection"
              className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
            <div className="absolute bottom-5 left-5 text-white transition-all duration-500 group-hover:translate-y-[-5px]">
              <h3 className="text-lg font-semibold">Women’s Collections</h3>
              <p className="text-sm text-gray-300 max-w-xs">
                Featured woman collections that give you another vibe.
              </p>
              <button className="mt-2 flex items-center gap-2 text-sm font-semibold hover:underline">
                Shop Now <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Bottom Two Small Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Speakers */}
            <div className="relative group overflow-hidden rounded-xl h-[180px] md:h-[200px]">
              <img
                src={img3}
                alt="Speakers"
                className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
              <div className="absolute bottom-5 left-5 text-white transition-all duration-500 group-hover:translate-y-[-5px]">
                <h3 className="text-lg font-semibold">Speakers</h3>
                <p className="text-sm text-gray-300">Amazon wireless speakers</p>
                <button className="mt-2 flex items-center gap-2 text-sm font-semibold hover:underline">
                  Shop Now <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative group overflow-hidden rounded-xl h-[180px] md:h-[200px]">
              <img
                src={img4}
                alt="Perfume"
                className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
              <div className="absolute bottom-5 left-5 text-white transition-all duration-500 group-hover:translate-y-[-5px]">
                <h3 className="text-lg font-semibold">Perfume</h3>
                <p className="text-sm text-gray-300">GUCCI INTENSE OUD EDP</p>
                <button className="mt-2 flex items-center gap-2 text-sm font-semibold hover:underline">
                  Shop Now <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
