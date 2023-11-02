import React, { useEffect, useState } from "react";

const ShopMain = () => {
   const [prducts,setProducts]=useState([])
   useEffect()
  return (
    <div className="h-[100dvh] mt-[8%] w-[85%] mx-auto">
 
        <div className="flex gap-4">
        <select className="select select-sm  w-full max-w-xs text-white select-secondary">
          <option disabled selected>
            Short By price
          </option>
          <option>Low To High</option>
          <option>High To Low</option>
        </select>
     
 

        <select className="select w-full  select-sm  select-secondary max-w-xs text-white">
          <option disabled selected>
          Filter By Category
          </option>
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Beauty & Personal Care</option>
          <option>Health & Wellness</option>
        </select>
        </div>

        <div>

        </div>
     
    </div>
  );
};

export default ShopMain;
