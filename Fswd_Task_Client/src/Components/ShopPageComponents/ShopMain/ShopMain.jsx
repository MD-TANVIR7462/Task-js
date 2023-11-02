import React, { useEffect, useState } from "react";
import ProductCard from "../../HomeComponents/Products/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

const ShopMain = () => {
  const [products, setProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

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

  const sortProducts = (option) => {
    setSortOption(option);
    let sortedProducts = [...finalProducts];
    if (option === "LowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "HighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFinalProducts(sortedProducts);
  };
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "All") {
      setFinalProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
      );
      setFinalProducts(filteredProducts);
    }
  };

  const handlePriceChange = (e) => {
    sortProducts(e.target.value);
  };

  const paginateProducts = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = finalProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
            <option disabled value="">
              Sort By price
            </option>
            <option value="LowToHigh">Low To High</option>
            <option value="HighToLow">High To Low</option>
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
        {currentProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

    
      <div className="pagination flex justify-center items-center my-8">
        <span
          className="btn btn-outline btn-xs mr-2"
          onClick={() => paginateProducts(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </span>
        {Array(Math.ceil(finalProducts.length / productsPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              className={`btn btn-outline btn-xs mr-2 ${
                currentPage === index + 1 ? "btn-primary" : ""
              }`}
              onClick={() => paginateProducts(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        <button
          className="btn btn-outline btn-xs"
          onClick={() => paginateProducts(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(finalProducts.length / productsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopMain;
