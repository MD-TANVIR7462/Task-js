import React from "react";
import Button from "../../../Buttons/Button";

const CategoryCard = ({name,img}) => {
  return (
    <div className="card  bg-base-100 shadow-xl h-[70%] image-full z-0">
      <figure>
        <img
          src={img}
          alt="img"
        />
      </figure>
      <div className="card-body  justify-center items-center">
        <h2 className="card-title mt-auto">{name}</h2>
        
        <div className="card-actions ">
          <Button text={'Shop Now'}></Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
