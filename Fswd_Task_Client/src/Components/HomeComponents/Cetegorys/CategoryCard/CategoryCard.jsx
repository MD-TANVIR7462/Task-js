import React from "react";
import Button from "../../../Buttons/Button";
import { Link } from "react-router-dom";

const CategoryCard = ({name,img}) => {
  return (
    <div className="card  bg-base-100 shadow-xl h-[90%] md:h[80%] lg:h-[70%] image-full z-0">
      <figure>
        <img
          src={img}
          alt="img"
        />
      </figure>
      <div className="card-body  justify-center items-center">
        <h2 className="card-title mt-auto">{name}</h2>
        
        <div className="card-actions ">
          <Link to={`/shop/${name}`}><Button text={'Shop Now'}></Button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
