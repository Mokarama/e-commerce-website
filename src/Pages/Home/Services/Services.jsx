import { FaShippingFast, FaHeadphonesAlt, FaRegCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        
        {/* Free Delivery */}
        <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-6 hover:shadow-md transition duration-300">
          <div className="bg-gray-200 p-5 rounded-full">
            <FaShippingFast className="text-white bg-gray-900 text-4xl p-2 rounded-full" />
          </div>
          <h3 className="mt-4 font-semibold text-base md:text-lg">
            FREE AND FAST DELIVERY
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-6 hover:shadow-md transition duration-300">
          <div className="bg-gray-200 p-5 rounded-full">
            <FaHeadphonesAlt className="text-white bg-gray-900 text-4xl p-2 rounded-full" />
          </div>
          <h3 className="mt-4 font-semibold text-base md:text-lg">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Money Back */}
        <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-6 hover:shadow-md transition duration-300">
          <div className="bg-gray-200 p-5 rounded-full">
            <FaRegCheckCircle className="text-white bg-gray-900 text-4xl p-2 rounded-full" />
          </div>
          <h3 className="mt-4 font-semibold text-base md:text-lg">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            We return money within 30 days
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
