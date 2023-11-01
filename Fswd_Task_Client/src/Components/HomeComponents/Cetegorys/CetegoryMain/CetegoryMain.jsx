import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CetegoryMain = () => {
  const categories = [
    {
      name: "Electronics",
      image: "https://i.ibb.co/mD72bSb/camera-1.jpg",
    },
    {
      name: "Fashion",
      image: "https://i.ibb.co/mD72bSb/camera-1.jpg",
    },
    {
      name: "Home & Furniture",
      image: "https://i.ibb.co/yFNQpQf/240-F-119426880-bh-RT6bs-E992-Hsm-St-CFacjum6h-Tffn90-E.jpg",
    },
    {
      name: "Beauty & Personal Care",
      image: "https://i.ibb.co/yFNQpQf/240-F-119426880-bh-RT6bs-E992-Hsm-St-CFacjum6h-Tffn90-E.jpg",
    },

  ];
  return (
  <>
 <h2 className=' text-2xl md:text-4xl font-bold text-center  mt-16 mb-8 '>Shop By Category</h2>
    <div className="z-0 grid grid-cols-4 gap-8 w-[84%]  mx-auto">
      {categories.map((category, index) => (
        <CategoryCard
          name={category.name}
          img={category.image}
          key={index}
        ></CategoryCard>
      ))}
    </div></>
  );
};

export default CetegoryMain;
