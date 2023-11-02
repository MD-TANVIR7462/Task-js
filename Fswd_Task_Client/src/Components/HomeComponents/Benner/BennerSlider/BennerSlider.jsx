import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Buttons/Button';

const BennerSlider = ({img}) => {
   return (
      <div
      className="bg-cover object-cover object-center bg-center md:w-full md:min-h-screen  h-[380px]  flex justify-center items-center  "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="text-center md:flex  md:min-h-[860px] items-center w-[90%] mx-auto">
      <div className="max-w-xl md:w-3/4 mr-auto mt-12">
          <i className="md:text-5xl text-3xl  font-thin  text-purple-400 ">
           Only This Week
          </i>
          <h1 className="md:text-5xl text-2xl font-semibold mt-3 mb-1 md:my-4 text-white">
            ULTIMATE DISCOUNT 
          </h1>
       
       <Link to={'/shop/All'}><Button text={"Shop Now"} ></Button></Link>
        </div>
      </div>
    </div>
   );
};

export default BennerSlider;