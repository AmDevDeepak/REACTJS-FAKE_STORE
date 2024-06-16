import React, { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link } from "react-router-dom";
const Nav = () => {
  const [products] = useContext(ProductContext);
  let uniqueCategory =
    products &&
    products.reduce((acc, currVal) => [...acc, currVal.category], []);
  uniqueCategory = [...new Set(uniqueCategory)];
  console.log(uniqueCategory);
  return (
    <nav className="w-[15%] h-full flex flex-col bg-zinc-200 items-center pt-5">
      <Link to="/" className="text-red-400 text-[2vw] font-bold">My Fake Store</Link>
      <div className="w-full mt-4 p-3">
        <h1 className="text-2xl font-semibold">Categories</h1>

        <div className="w-full mt-4 flex flex-col gap-3">
          {uniqueCategory.map((category, idx) => (
            <Link
              key={idx}
              to={`/?category=${category}`}
              className="flex items-center text-xl px-2 hover:font-bold"
            >
              <span className="rounded-full mr-3 w-[1vw] h-[1vw] bg-red-200"></span>
              {category}
            </Link>
          ))}
        </div>
      </div>
      <a
        className="px-3 py-2 rounded-md bg-green-500 font-semibold mt-3"
        href="/create"
      >
        Add New Product
      </a>
    </nav>
  );
};

export default Nav;
