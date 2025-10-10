import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const RightSlider = () => {
  const banners = [
    {
      id: 1,
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
      image: "../../../public/bannerImg/banner1.jpg",
      link: "/electronics",
    },
    {
      id: 2,
      title: "Men's Fashion Sale",
      subtitle: "Get 20% off New Arrivals",
      image: "../../../public/bannerImg/banner1.jpg",
      link: "/men's-fashion",
    },
    {
      id: 3,
      title: "Home Essentials",
      subtitle: "Up to 15% off",
      image: "../../../public/bannerImg/banner1.jpg",
      link: "/home-&-lifestyle",
    },
  ];

  return (
    <div className="p-4">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        swipeable
        emulateTouch
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="bg-[#272323] text-white flex flex-col md:flex-row items-center justify-between w-full h-[450px] px-6 md:px-12 py-10"
          >
            {/* Text Section */}
            <div className="md:w-1/2 space-y-3 text-center md:text-left">
              <h3 className="text-lg font-semibold">{banner.title}</h3>
              <p className="text-3xl font-bold">{banner.subtitle}</p>
              <Link
                to={banner.link}
                className="inline-block mt-3 px-5 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Shop Now →
              </Link>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-56 md:w-80 object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RightSlider;
