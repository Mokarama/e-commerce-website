import React, { useState, useRef } from "react";
import {
  FaHeart,
  FaStar,
  FaShoppingCart,
  FaArrowLeft,
  FaArrowRight,
  FaEye,
} from "react-icons/fa";

// 🛍️ Product data
const productsData = [
  {
    id: 1,
    title: "Wireless Headphones",
    oldPrice: 120,
    newPrice: 85,
    discount: "30% OFF",
    image: "https://picsum.photos/id/1011/400/300",
    rating: 4.5,
    reviews: 145,
  },
  {
    id: 2,
    title: "Smart Watch",
    oldPrice: 200,
    newPrice: 150,
    discount: "25% OFF",
    image: "https://picsum.photos/id/1012/400/300",
    rating: 4.2,
    reviews: 189,
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    oldPrice: 90,
    newPrice: 60,
    discount: "33% OFF",
    image: "https://picsum.photos/id/1013/400/300",
    rating: 4.6,
    reviews: 215,
  },
  {
    id: 4,
    title: "Gaming Mouse",
    oldPrice: 70,
    newPrice: 45,
    discount: "35% OFF",
    image: "https://picsum.photos/id/1015/400/300",
    rating: 4.4,
    reviews: 173,
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    oldPrice: 150,
    newPrice: 110,
    discount: "27% OFF",
    image: "https://picsum.photos/id/1016/400/300",
    rating: 4.8,
    reviews: 290,
  },
  {
    id: 6,
    title: "Action Camera",
    oldPrice: 250,
    newPrice: 190,
    discount: "24% OFF",
    image: "https://picsum.photos/id/1018/400/300",
    rating: 4.5,
    reviews: 320,
  },
  {
    id: 7,
    title: "Wireless Charger",
    oldPrice: 40,
    newPrice: 28,
    discount: "30% OFF",
    image: "https://picsum.photos/id/1020/400/300",
    rating: 4.1,
    reviews: 98,
  },
  {
    id: 8,
    title: "4K Drone",
    oldPrice: 600,
    newPrice: 480,
    discount: "20% OFF",
    image: "https://picsum.photos/id/1021/400/300",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 9,
    title: "Laptop Stand",
    oldPrice: 80,
    newPrice: 55,
    discount: "31% OFF",
    image: "https://picsum.photos/id/1022/400/300",
    rating: 4.3,
    reviews: 124,
  },
  {
    id: 10,
    title: "USB-C Hub",
    oldPrice: 60,
    newPrice: 40,
    discount: "33% OFF",
    image: "https://picsum.photos/id/1024/400/300",
    rating: 4.5,
    reviews: 167,
  },
];

const FlashSales = () => {
  const scrollRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? productsData : productsData.slice(0, 8);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-10 px-5 md:px-10 bg-base-100 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          <span className="text-red-500">Today’s</span> Flash Sales
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3 md:mt-0">
          {/* Timer */}
          <div className="flex gap-2 text-gray-600">
            <span className="font-semibold">Ends in:</span>
            <div className="countdown font-mono text-lg flex gap-1">
              <span>03</span>:<span>23</span>:<span>19</span>:<span>56</span>
            </div>
          </div>

          {/* Arrows for scroll */}
          {!showAll && (
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div
        ref={scrollRef}
        className={`${
          showAll
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
            : "flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-5 scrollbar-hide"
        }`}
      >
        {visibleProducts.map((item) => (
          <div
            key={item.id}
            className="relative min-w-[160px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[250px] bg-base-100 shadow-md hover:shadow-xl rounded-2xl border border-gray-100 group flex-shrink-0 snap-center"
          >
            {/* Image */}
            <figure className="relative overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-2xl w-full h-36 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                {item.discount}
              </span>

              {/* Love + Eye Icons */}
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="p-2 bg-white/20 border border-white rounded-full hover:bg-red-500 transition">
                  <FaHeart className="text-white text-[16px]" />
                </button>
                <button className="p-2 bg-white/20 border border-white rounded-full hover:bg-red-500 transition">
                  <FaEye className="text-white text-[16px]" />
                </button>
              </div>

              {/* Add to Cart on Hover */}
              <button className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-red-500 text-white text-xs px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md hover:bg-red-600 whitespace-nowrap">
                <FaShoppingCart className="text-sm" /> Add to Cart
              </button>
            </figure>

            {/* Info */}
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-1 truncate">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-bold">${item.newPrice}</span>
                <span className="line-through text-gray-400 text-sm">
                  ${item.oldPrice}
                </span>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(item.rating) ? "opacity-100" : "opacity-30"}
                  />
                ))}
                <span className="text-gray-500 text-xs ml-1 truncate">
                  ({item.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className={`btn px-8 rounded-full ${
            showAll
              ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          {showAll ? "Show Less" : "View All Products"}
        </button>
      </div>
    </section>
  );
};

export default FlashSales;
