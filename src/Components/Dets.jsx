import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading";
const Dets = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return product ? (
    <div className="w-[70%] h-screen flex gap-20 m-auto p-[3%]">
      <div className="image w-[40%] h-full mt-10">
        <img className="w-full object-cover" src={product.image} alt="" />
      </div>
      <div className="content w-[60%] mt-10">
        <h1 className="text-5xl font-semibold mt-5 ">{product.title}</h1>
        <h2 className="text-4xl font-bold text-red-400 mt-5">
          &#x20b9;{product.price}
        </h2>
        <p className="text-xl mt-3 w-[80%]">{product.description}</p>
        <div className="mt-16 flex gap-5 text-2xl text-zinc-900">
          <Link className="px-4 py-3 bg-green-500 rounded-md font-semibold">
            Add To Cart
          </Link>
          <Link className="px-4 py-3 bg-yellow-400 rounded-md font-semibold">
            Add To Wishlist
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dets;
