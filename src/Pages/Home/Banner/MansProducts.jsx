import { useState } from 'react';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const mensProductsData = [
  { id: 1, title: 'Classic Leather Jacket', price: 3500, oldPrice: 4500, discount: 22, rating: 4.7, img: 'https://via.placeholder.com/150x150?text=Leather+Jacket' },
  { id: 2, title: 'Casual Cotton Shirt', price: 1200, oldPrice: 1500, discount: 20, rating: 4.4, img: 'https://via.placeholder.com/150x150?text=Cotton+Shirt' },
  { id: 3, title: 'Slim Fit Jeans', price: 1800, oldPrice: 2300, discount: 22, rating: 4.6, img: 'https://via.placeholder.com/150x150?text=Jeans' },
  { id: 4, title: 'Formal Blazer', price: 4200, oldPrice: 5000, discount: 16, rating: 4.8, img: 'https://via.placeholder.com/150x150?text=Blazer' },
  { id: 5, title: 'Sports Sneakers', price: 2500, oldPrice: 3100, discount: 19, rating: 4.5, img: 'https://via.placeholder.com/150x150?text=Sneakers' },
  { id: 6, title: 'Classic Polo T-Shirt', price: 900, oldPrice: 1100, discount: 18, rating: 4.3, img: 'https://via.placeholder.com/150x150?text=Polo+Tshirt' },
  { id: 7, title: 'Winter Hoodie', price: 1500, oldPrice: 1900, discount: 21, rating: 4.4, img: 'https://via.placeholder.com/150x150?text=Hoodie' },
  { id: 8, title: 'Formal Trousers', price: 2000, oldPrice: 2500, discount: 20, rating: 4.2, img: 'https://via.placeholder.com/150x150?text=Trousers' },
  { id: 9, title: 'Wrist Watch', price: 3000, oldPrice: 3600, discount: 17, rating: 4.6, img: 'https://via.placeholder.com/150x150?text=Watch' },
  { id: 10, title: 'Leather Belt', price: 800, oldPrice: 1000, discount: 20, rating: 4.1, img: 'https://via.placeholder.com/150x150?text=Belt' },
];

const MansProducts=()=> {
  const [visible, setVisible] = useState(5);

  return (
    <>
    <Link to="/men-s-fashion">
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {mensProductsData.slice(0, visible).map((product) => (
          <div key={product.id} className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
              -{product.discount}%
            </span>

            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button className="bg-white p-1 rounded-full shadow hover:text-red-500">
                <FaHeart />
              </button>
              <button className="bg-white p-1 rounded-full shadow hover:text-blue-500">
                <FaEye />
              </button>
            </div>

            <img src={product.img} alt={product.title} className="w-full h-40 object-contain p-3" />

            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold mb-2">{product.title}</h3>
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-red-500 font-bold">৳{product.price}</span>
                <span className="text-gray-400 line-through text-sm">৳{product.oldPrice}</span>
              </div>
              <div className="flex justify-center text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < Math.round(product.rating) ? '' : 'text-gray-300'} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visible < mensProductsData.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisible(mensProductsData.length)}
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
}
export default MansProducts;