import React from "react";
import { NavLink } from "react-router-dom";
import Fimg from '../../../../../src/Assets/image/Fimg.jpg';
import "./FemalePhoto.css";

const fser = ['Hair Cut....................250/-','Wax Tretment....................500/-','Cleanup Tretment ....................500/-','Hair Extension....................2500',' 24k gold Facial ....................1500/-','Paraffin Mask....................350/-','Facial Tretment....................500/-','Hair Color....................1200/-',]

function Feimg(){
    return(
        <div className="mainph">
            <div className="white-smoke---shape">

            </div>
            
             <div className="mph"> 
                <img src={Fimg}/>
            </div>

            <div className="mser">
                <p className="se"> Female Services</p>
                {fser.map((service) =>(
                <div className="maleservice">{service}
                 <p className="length">Service length 25-30 minutes</p>
                <button className="bookbtn1">Booking</button>
            
                </div>
                
            ))}
            
            </div>

        </div>

    )
}
export default Feimg;

