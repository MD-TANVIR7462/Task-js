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
      image: "https://i.ibb.co/RzRw1BN/pexels-photo-135620.webp",
    },
    {
      name: "Home & Furniture",
      image: "  https://i.ibb.co/gTFqyHW/istockphoto-1251694108-612x612.jpg",
    },
    {
      name: "Beauty & Personal Care",
      image: "https://i.ibb.co/5x196v6/istockphoto-1316218884-612x612.jpg",
    },

  ];
  return (
  <div className="w-[84%]  mx-auto">
 <h2 className='  text-2xl md:text-2xl font-semibold  text-center mt-8 md:mt-12 lg:mt-16 mb-6 lg:mb-8 text-white '>Shop By Category</h2>
    <div className="z-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-8  ">
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
