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
      <div className="flex flex-row justify-between">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter"> EKOSH</h3>
              <Link to="/menu" className="p-3 bg-green-400 ml-5">Order Now!</Link>
            </div>
            
          </div>
        </div>

        <div className="w-64 ">
          <img src={chickenImg} alt="" className="w-full" />
        </div>
      </div>

      <div className="absolute w-1/2">
        <img src={food3} alt="" />
      </div>

      <div className="font-Serif italic">
      <marquee scrolldelay="50" className="">
        <p>
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
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque
            doloribus dolore aperiam aliquam fugit odit corrupti, inventore quia
            
          </p>
          <img src={food1} className="w-36" alt="" />
          
        </div>
      </marquee>
      <marquee className="" scrolldelay="0">

        <div className="flex flex-row gap-14 items-center">
            <p>doloribus dolore aperiam aliquam fugit odit corrupti, inventore quia
          illum quod sunt mollitia possimus rem quo</p>
        <img src={prawnImg} alt="" className="w-36" /> 
          <img src={noodleImg} alt="" className="w-36 " />
          
        </div>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
           ut necessitatibus sequi
          provident aliquid.
        </span>
      </marquee>
      <marquee className="">
        <div className="w-36 flex flex-row">
          <p className="items-center">Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </marquee>
      </div>
     
    </div>
  );
};

export default HomePage;
