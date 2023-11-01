import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
// import Benner from './Components/HomeComponents/Benner/Benner';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* <Benner></Benner> */}
      <Outlet></Outlet>
    </div>
  );
};

export default App;