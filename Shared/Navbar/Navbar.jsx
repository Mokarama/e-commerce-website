import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </>
  );

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="w-full">
      {/* Top Black Bar */}
      <div className="bg-black text-white text-sm py-7 text-center justify-around px-3 md:flex  items-center">
        <p className="">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
        <a href="#" className="underline text-white font-semibold hover:text-gray-300">ShopNow</a>
        <div className="flex items-center gap-1 mt-1 sm:mt-0">
          <p>English</p>
          <IoIosArrowDown />
        </div>
      </div>

      {/* 🌐 Main Navbar */}
      <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        {/* Left - text */}
        <div>

          <h2 className="text-2xl  font-bold">Exclusive</h2>
        </div>

        {/* Middle - Menu (Desktop) */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">{navItems}</ul>

        {/* Right - Search + Icons */}
        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-full px-4 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1.5 text-gray-500 hover:text-black"
            >
              🔍
            </button>
          </form>
          <FaHeart className="text-2xl cursor-pointer hover:text-pink-500" />
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-500" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md p-5 md:hidden">
          <ul className="flex flex-col gap-4 text-lg">{navItems}</ul>

          <form onSubmit={handleSearch} className="mt-4 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-full px-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
              type="submit"
              className="absolute right-3 top-2 text-gray-500 hover:text-black"
            >
              🔍
            </button>
          </form>

          <div className="flex gap-5 mt-4 text-2xl">
            <FaHeart className="cursor-pointer hover:text-pink-500" />
            <FaShoppingCart className="cursor-pointer hover:text-green-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
