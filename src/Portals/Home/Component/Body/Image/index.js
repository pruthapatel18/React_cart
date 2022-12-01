import React from "react";
import { NavLink } from "react-router-dom";
import "./Image.css";


const IMAGE = ({image,image1}) => {
  
  return (
    
      <div className="fsimg">
        <div className="fimg">
        <img src={image} />  
        <NavLink to="/Male">
        <button className="imgbtn">Male Services</button>
        </NavLink>
      </div>
      <div className="simg">
        <img src={image1} />
        <NavLink to="/Female">
        <button className="imgbtn1">Female Services</button>
        </NavLink>
      </div>
      </div>
  );
};
export default IMAGE;
