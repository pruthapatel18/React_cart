import React  from 'react';
import './Header.css';
import cosys from 'C:/Users/pruth/Desktop/Prutha/my/src/Assets/image/cosys.jpg';
import { NavLink } from "react-router-dom";

function Header(){
  return (
    <div className="header">
           <div className="header__left">
              
              <NavLink className="link" to="home">
                Home
              </NavLink>
              <NavLink className="link1" to="male">
                Male
              </NavLink>
              <NavLink className="link2" to="female">
                Female
              </NavLink>
              

 
           </div>
           <div className="header__center">
           <img src={ cosys } alt=""/>
  
           </div>
           <div className="header__right">
              <NavLink className="link4" to="contact">
                Contact Us
              </NavLink>
              <NavLink className="link5" to="booking">
                Booking
              </NavLink>

              
              {/* <button className='hbtn'>Contacts</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              {/* <button className='hbtn1'>Booking</button> */}
           </div>
    </div>
  )
}

export default Header;