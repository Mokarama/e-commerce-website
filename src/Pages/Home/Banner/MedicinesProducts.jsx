import { useState } from 'react';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const medicinesProductsData = [
  { 
    id: 1, 
    title: 'Paracetamol 500mg',
    price: 30, 
    oldPrice: 40, 
    discount: 25, 
    rating: 4.8, 
    img: '../../../../public/medicinesImg/img1.jpg' 
  },
  { 
    id: 2, 
    title: 'Antacid Tablet', 
    price: 60, 
    oldPrice: 80, 
    discount: 25, 
    rating: 4.6, 
    img: '../../../../public/medicinesImg/img2.jpg' 
  },
  { 
    id: 3, 
    title: 'Vitamin C Capsule', 
    price: 150, 
    oldPrice: 180, 
    discount: 17, 
    rating: 4.5, 
    img: '../../../../public/medicinesImg/img3.jpg' 
  },
  { 
    id: 4, 
    title: 'Cough Syrup', 
    price: 120, 
    oldPrice: 150, 
    discount: 20, 
    rating: 4.4, 
    img: '../../../../public/medicinesImg/img4.jpg' 
  },
  { 
    id: 5, 
    title: 'Pain Relief Spray', 
    price: 220, 
    oldPrice: 260, 
    discount: 15, 
    rating: 4.3, 
    img: '../../../../public/medicinesImg/img5.jpg' 
  },
  { 
    id: 6, 
    title: 'Glucose Powder', 
    price: 80, 
    oldPrice: 100, 
    discount: 20, 
    rating: 4.5, 
    img: '../../../../public/medicinesImg/img6.jpg' 
  },
  { 
    id: 7, 
    title: 'First Aid Kit', 
    price: 450, 
    oldPrice: 550, 
    discount: 18, 
    rating: 4.7, 
    img: '../../../../public/medicinesImg/img7.jpg' 
  },
  { 
    id: 8, 
    title: 'Hand Sanitizer', 
    price: 90, 
    oldPrice: 120, 
    discount: 25, 
    rating: 4.6, 
    img: '../../../../public/medicinesImg/img8.jpg' 
  },
  { 
    id: 9, 
    title: 'Blood Pressure Monitor', 
    price: 2200, 
    oldPrice: 2500, 
    discount: 12, 
    rating: 4.8, 
    img: '../../../../public/medicinesImg/img9.jpg' 
  },
  { 
    id: 10, 
    title: 'Digital Thermometer', 
    price: 300, 
    oldPrice: 350, 
    discount: 14, 
    rating: 4.6, 
    img: '../../../../public/medicinesImg/img10.jpg' 
  }
];

const MedicinesProducts = () => {
  const [visible, setVisible] = useState(5);

  return (
    <>
      <Link to="/medicine">
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {medicinesProductsData.slice(0, visible).map((product) => (
              <div key={product.id} className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                <span className="absolute top-3 left-4 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                  -{product.discount}%
                </span>

                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="bg-white p-1 rounded-full shadow hover:text-red-500">
                    <FaHeart />
                  </button>
                  <button className="bg-white p-1 rounded-full shadow hover:text-blue-500">
                    <FaEye />
                  </button>
                </div>

                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 object-cover p-2 rounded-2xl hover:animate-pulse"
                />

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

          {visible < medicinesProductsData.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisible(medicinesProductsData.length)}
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

export default MedicinesProducts;
