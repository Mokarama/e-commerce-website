import { Link, Route } from "react-router-dom";


const LeftSlider = () => {
  const links = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className=" p-4">
      <ul className="space-y-2">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase().replace(/['& ]+/g, "-")}`}
              className="block py-2 px-3 hover:bg-gray-100 rounded-md text-gray-700 font-medium"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default LeftSlider;
