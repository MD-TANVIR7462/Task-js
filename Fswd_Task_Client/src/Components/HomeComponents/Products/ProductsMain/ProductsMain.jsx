import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsMain = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
   
      fetch("https://server-blush-five.vercel.app/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.slice(0, 8));
        });
   
  }, []);
  return (
    <div className="mb-12">
      <h2 className="  text-2xl md:text-2xl font-semibold text-center  mt-10 md:mt-0 mb-5 md:mb-7 lg:mb-8 text-white ">
        Our Populer Product's
      </h2>
      {Products?.length === 0 && (
        <p className=" flex items-center justify-center text-center h-[30dvh] md:h-[50dvh] ">
          {" "}
          <button className="btn  text-white">
            <span className="loading loading-spinner"></span>
            Wait a second
          </button>
        </p>
      )}
      <div className="grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  w-[85%] mx-auto">
        {Products?.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsMain;
