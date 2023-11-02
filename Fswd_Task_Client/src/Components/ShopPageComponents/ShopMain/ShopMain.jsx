import React, { useEffect, useState } from "react";
import ProductCard from "../../HomeComponents/Products/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

const ShopMain = () => {
  const [products, setProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    try {
      fetch("../../../../Product.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setFinalProducts(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (category !== "All") {
      const CategoryProducts = products?.filter(
        (singleproduct) => singleproduct?.category === category
      );

      setFinalProducts(CategoryProducts);
    }
    if (category === "All") {
      setFinalProducts(products);
    }
  }, [products, category]);

  const handleCategoryChange = (e) => {
    if (products.length > 1) {
      filterProducts(e.target.value);
    }
  };

  const handlePriceChange = (e) => {};

  const filterProducts = (cat) => {
    if (products?.length > 1 && cat === "All") {
      setFinalProducts(products);
    }

    if (products?.length > 1 && cat !== "All") {
      const filteredProducts = products?.filter(
        (singleproduct) => singleproduct?.category === cat
      );
      setFinalProducts(filteredProducts);
    }
  };

  return (
    <div className="mt-[20%] md:mt-[8%] w-[85%] mx-auto">
      <div className="flex justify-between">
        <p className="text-2xl md:text-4xl font-semibold text-center text-white">
          Meet Our Products
        </p>
        <div className="flex gap-4">
          <select
            onChange={handlePriceChange}
            className="select select-sm w-full max-w-xs text-white select-secondary"
          >
            <option disabled selected>
              Short By price
            </option>
            <option>Low To High</option>
            <option>High To Low</option>
          </select>

          <select
            onChange={handleCategoryChange}
            className="select w-full select-sm select-secondary max-w-xs text-white"
          >
            <option disabled selected>
              Filter By Category
            </option>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Beauty & Personal Care</option>
            <option>Health & Wellness</option>
            <option>Home & Furniture</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-4 my-16">
        {finalProducts?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ShopMain;
