import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

// Categories.jsx
import {
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaTabletAlt,
  FaTv,
  FaMicrophone,
  FaPrint,
  FaKeyboard,
  FaDesktop,
} from "react-icons/fa";

const categories = [
  { id: 1, name: "Phones", icon: <FaMobileAlt size={24} /> },
  { id: 2, name: "Computers", icon: <FaLaptop size={24} /> },
  { id: 3, name: "SmartWatch", icon: <FaClock size={24} /> },
  { id: 4, name: "Camera", icon: <FaCamera size={24} /> },
  { id: 5, name: "HeadPhones", icon: <FaHeadphones size={24} /> },
  { id: 6, name: "Gaming", icon: <FaGamepad size={24} /> },
  { id: 7, name: "Tablet", icon: <FaTabletAlt size={24} /> },
  { id: 8, name: "TV", icon: <FaTv size={24} /> },
  { id: 9, name: "Microphone", icon: <FaMicrophone size={24} /> },
  { id: 10, name: "Printer", icon: <FaPrint size={24} /> },
  { id: 11, name: "Keyboard", icon: <FaKeyboard size={24} /> },
  { id: 12, name: "Desktop", icon: <FaDesktop size={24} /> },
  { id: 13, name: "Smart Glasses", icon: <FaClock size={24} /> },
  { id: 14, name: "Accessories", icon: <FaHeadphones size={24} /> },
];

const Categories = () => {
  const scroll = (direction) => {
    const container = document.getElementById("category-container");
    if (!container) return;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - container.clientWidth
        : container.scrollLeft + container.clientWidth;

    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="p-10">
      {/* Heading */}
      <div className="flex items-center mb-4">
        <div className="w-2 h-6 bg-red-500 mr-2"></div>
        <p className="text-red-500 font-semibold text-sm">Categories</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Browse By Category</h2>

      {/* Scroll Buttons */}
      <div className="flex justify-end mb-2 gap-2 ">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Category Cards */}
      <div
        id="category-container"
        className="flex space-x-4  overflow-x-auto scrollbar-hide"
      >
        {categories.map((cat) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-once="false"
            key={cat.id}
            className="flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center p-4 bg-white hover:bg-[#DB4444] border-1 border-black rounded-lg shadow-md cursor-pointer transition hover:text-white"
          >
            <div className="mb-2 ">{cat.icon}</div>
            <p className="text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
