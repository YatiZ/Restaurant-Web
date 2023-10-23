import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    
    <div className=" bg-cyan-400 w-full p-3 opacity-80 px-10 flex flex-row text-red-600 justify-between fixed bg-fixed overflow-hidden z-10">
      <div>Logo</div>
      <div className="ml-80 flex flex-row gap-24">
        <Link to='/'>HOME</Link>
        <Link to='/menu'>MENU</Link>
        <Link to='/about-us'>ABOUT US</Link>
        <Link to='/contact-us'>CONTACT US</Link>
      </div>
    </div>
  );
};

export default NavBar;
