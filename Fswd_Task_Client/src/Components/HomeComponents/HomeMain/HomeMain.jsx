import React from 'react';
import Benner from '../Benner/Benner';
import CetegoryMain from '../Cetegorys/CetegoryMain/CetegoryMain';
import ProductsMain from '../Products/ProductsMain/ProductsMain';

const HomeMain = () => {
   return (
      <div>
         <Benner></Benner>
         <CetegoryMain></CetegoryMain>
         <ProductsMain></ProductsMain>
      </div>
   );
};

export default HomeMain;