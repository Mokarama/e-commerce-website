import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4.5,
    img: "../../../../public/womansImg/img1.jpg",
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4.3,
    img: "../../../../public/womansImg/img2.jpg",
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 4.7,
    img: "../../../../public/womansImg/img3.jpg",
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.2,
    img: "../../../../public/womansImg/img4.jpg",
  },
  {
    id: 5,
    title: "Redragon Gaming Mouse",
    price: 280,
    oldPrice: 350,
    discount: 20,
    rating: 4.6,
    img: "../../../../public/womansImg/img5.jpg",
  },
  {
    id: 6,
    title: "Logitech Headset",
    price: 480,
    oldPrice: 550,
    discount: 15,
    rating: 4.8,
    img: "../../../../public/womansImg/img6.jpg",
  },
  {
    id: 7,
    title: "Gaming Chair Pro",
    price: 650,
    oldPrice: 800,
    discount: 18,
    rating: 4.4,
    img: "../../../../public/womansImg/img7.jpg",
  },
  {
    id: 8,
    title: "Mechanical Keyboard RGB",
    price: 1100,
    oldPrice: 1300,
    discount: 20,
    rating: 4.9,
    img: "../../../../public/womansImg/img8.jpg",
  },
  {
    id: 9,
    title: "Gaming Mouse Pad XL",
    price: 220,
    oldPrice: 280,
    discount: 22,
    rating: 4.3,
    img: "../../../../public/womansImg/img9.jpg",
  },
  {
    id: 10,
    title: "USB RGB Light Strip",
    price: 180,
    oldPrice: 250,
    discount: 28,
    rating: 4.1,
    img: "../../../../public/womansImg/img11.jpg",
  },
];

const WomansProducts = () => {
  const [visible, setVisible] = useState(5);

  return (
    <>
      <Link to="/woman-s-fashion">
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {productsData.slice(0, visible).map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                {/* Discount Label */}
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                  -{product.discount}%
                </span>

                {/* Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="bg-white p-1 rounded-full shadow hover:text-red-500">
                    <FaHeart />
                  </button>
                  <button className="bg-white p-1 rounded-full shadow hover:text-blue-500">
                    <FaEye />
                  </button>
                </div>

                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 rounded-2xl object-cover p-3"
                />

                {/* Product Info */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold mb-2">
                    {product.title}
                  </h3>
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="text-red-500 font-bold">
                      ৳{product.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ৳{product.oldPrice}
                    </span>
                  </div>
                  <div className="flex justify-center text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(product.rating) ? "" : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visible < productsData.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisible(productsData.length)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default WomansProducts;
