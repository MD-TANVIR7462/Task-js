import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsMain = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch("../../../../../Product.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.slice(0, 8));
        
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="mb-12">
      <h2 className="  text-2xl md:text-2xl font-semibold text-center  mb-8 text-white ">
        Our Populer Product's
      </h2>
      <div className="grid gap-6 grid-cols-4 w-[85%] mx-auto">
        {Products?.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsMain;
