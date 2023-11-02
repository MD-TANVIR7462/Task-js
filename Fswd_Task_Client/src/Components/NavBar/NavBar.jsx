import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navitems = (
    <>
     <Link to={'/'}>
     <li className="text-white font-semibold text-xl">
        <a>Home</a>
      </li>
     </Link>
     <Link to={`/shop/All`}>
     <li className="text-white font-semibold text-xl">
        <a>Shop</a>
      </li>
     </Link>
    </>
  );
  return (
    <div
      className={`navbar ${
        isScrolled ? "shadow-2xl" : "bg-none"
      } md:py-6 md:px-16 fixed top-0 z-10`}
      style={
        isScrolled
          ? {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }
          : {}
      }
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navitems}
          </ul>
        </div>
       <Link to={'/'}> <a className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/DQgJfhL/images-2.png" className="w-12 rounded-full h-12" alt="" /></a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navitems}</ul>
      </div>
      <div className="navbar-end">
       
      </div>
    </div>
  );
};

export default NavBar;
