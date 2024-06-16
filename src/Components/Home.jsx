import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";
import axios from "../Utils/Axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilterProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined") setFilterProducts(products);
    if (category != "undefined") getProductCategory();
  }, [category, products]);
  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-8 flex flex-wrap content-start gap-6 overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((product, idx) => (
            <Link
              key={idx}
              to={`/details/${product.id}`}
              className="w-[18%] flex flex-col justify-between p-3 rounded-lg shadow-xl bg-white hover:scale-[1.07] transition-transform h-[35vh]"
            >
              <div className="w-full flex-1 overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={product.image}
                  alt="Product Image"
                />
              </div>
              <h2 className="font-semibold text-sm mt-2">{product.title}</h2>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
