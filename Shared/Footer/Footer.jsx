
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer =() => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
        
        {/* Exclusive */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4 text-sm">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-600 rounded-md overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm px-3 py-2 w-full outline-none"
            />
            <button className="bg-white text-black px-3 py-2 hover:bg-gray-200 transition">
              →
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Support</h2>
          <p className="text-sm mb-1">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mb-1">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/account" className="hover:text-white">My Account</Link></li>
            <li><Link to="/login" className="hover:text-white">Login / Register</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms Of Use</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Download App</h2>
          <p className="text-xs text-gray-400 mb-2">Save $3 with App New User Only</p>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Qr_code_sample.svg"
              alt="QR Code"
              className="w-16 h-16"
            />
            <div className="flex flex-col gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-8"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-8"
              />
            </div>
          </div>
          <div className="flex gap-4 text-white text-lg">
            <a href="#"><FaFacebookF className="hover:text-gray-400" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-400" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-400" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-gray-400" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;