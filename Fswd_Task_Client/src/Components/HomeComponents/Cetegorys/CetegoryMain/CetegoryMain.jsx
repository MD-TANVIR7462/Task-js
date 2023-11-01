import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CetegoryMain = () => {
  const categories = [
    {
      name: "Electronics",
      image: "  https://i.ibb.co/1fmf9JT/pexels-photo-682933.jpg",
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
  <div className="w-[84%]  mx-auto">
 <h2 className='  text-2xl md:text-2xl font-semibold  text-center  mt-16 mb-8 text-white '>Shop By Category</h2>
    <div className="z-0 grid grid-cols-4 gap-8  ">
      {categories.map((category, index) => (
        <CategoryCard
          name={category.name}
          img={category.image}
          key={index}
        ></CategoryCard>
      ))}
    </div></div>
  );
};

export default CetegoryMain;
