import React from 'react';

const ProductCard = ({product}) => {
   console.log(product);
  const {
      id,
      title,
      description,
      price,
      category,
      image
    } = product;
   return (
      <div className="mb-3 md:mb-0 shadow-lg hover:shadow-md transition-shadow duration-300 rounded-lg ">
      <div className="relative bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-700">
        <div className="group">
        
          <img
            src={image}
            alt=""
            className="w-full object-cover object-center  h-[270px] md:h-[320px]  ob opacity-100 scale-100 hover:scale-110 transition-transform group-hover:opacity-100 duration-1000"
          />
          
        
        </div>
      </div>
      <div className="flex justify-between py-6 px-2">
        <span>
          <p className="text-sm md:text-lg text-white font-semibold">
            {title}
          </p>
          <p className="text-sm md:text-lg text-white font-medium">
            Category {category}
          </p>
          <p className="md:text-xl text-[#168a73]">
            {price}{" "}
            <span className="text-[#168a73]font-semibold">$</span>
          </p>
        </span>
      </div>
    </div>
   );
};

export default ProductCard;