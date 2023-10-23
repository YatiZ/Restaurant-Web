import React from "react";
import food1 from "../images/pngegg (1).png";
import chickenImg from "../images/pngegg (2).png";
import prawnImg from "../images/pngegg (6).png";
import noodleImg from "../images/pngegg (7).png";
import food2 from "../images/pngegg (4).png";
import food3 from "../images/pngegg (5).png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col md:flex-row md:justify-between justify-center">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center ">
              <h3 class="animate-charcter"> EKOSH</h3>
              <Link to="/menu" className="p-3 ml-5 button-85">Order Now!</Link>
            </div>
            
          </div>
        </div>

        <div className="w-64 mx-20 md:mx-0">
          <img src={chickenImg} alt="" className="w-full" />
        </div>

        </div>

      <div className="absolute md:w-1/2 w-full px-6 md:px-0 mt-10 md:mt-0">
        <img src={food3} alt="" />
      </div>

      <div className="font-Serif italic">
      <marquee scrolldelay="50">
        <p className="animate-pulse text-red-600">
          Lorem ipsum dolor, sit amet consectetur<br></br> adipisicing elit.
          Atque doloremque hic qui sint, illo temporibus praesentium nemo <br />{" "}
          veniam mollitia, cum laudantium saepe. Hic maiores unde optio harum
          voluptate possimus qui!
        </p>
        <div className="w-36 flex flex-row gap-44">
          <img src={food2} alt="food1" className="w-full" />
          <img src={food3} className="w-full" alt="" />
        </div>
      </marquee>
      <marquee>
        <div className="flex flex-row items-center">
        <p className="animate-pulse text-red-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque
            doloribus dolore aperiam aliquam fugit odit corrupti, inventore quia
            
          </p>
          <img src={food1} className="w-36" alt="" />
          
        </div>
      </marquee>
      <marquee className="" scrolldelay="0">

        <div className="flex flex-row gap-14 items-center">
            <p className="animate-pulse text-red-600">doloribus dolore aperiam aliquam fugit odit corrupti, inventore quia
          illum quod sunt mollitia possimus rem quo</p>
        <img src={prawnImg} alt="" className="w-36" /> 
          <img src={noodleImg} alt="" className="w-36 " />
          
        </div>

        <span className="animate-pulse text-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
           ut necessitatibus sequi
          provident aliquid.
        </span>
      </marquee>
      <marquee className="">
        <div className="w-36 flex flex-row">
          <p className="items-center animate-pulse text-red-600">Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </marquee>
      </div>
     
    </div>
  );
};

export default HomePage;
