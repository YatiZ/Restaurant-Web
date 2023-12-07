import React from "react";
import { Link } from "react-router-dom";
import navLogo from '../images/logoNN.png';
import Searching from "./Search";


const NavBar = () => {
  return (
    
    <div className=" nav w-full h-14 items-center opacity-80 px-10 flex flex-row text-red-600 justify-between fixed overflow-hidden z-10">
      <Link className="link" to='/'>HOME</Link>
      <div className=" flex flex-row gap-24 items-center">
        
        <Link className="link" to='/menu'>MENU</Link>
        <Link className="link" to='/about-us'>ABOUT US</Link>
        <div className="w-10">
        <img src={navLogo} alt="" className="w-full h-full object-contain"/>
        </div>
        <Link className="link" to='/order-list'>ORDER LIST</Link>
        <Link className="link" to='/contact-us'>CONTACT US</Link>
      </div>
     
    </div>
  );
};

export default NavBar;
