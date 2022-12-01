import React from "react";
import Malephoto from '../../../../../src/Assets/image/Malephoto.jpg';
import "./MenPhoto.css";

const maleSer = ['Classic Hair cut..............200/-','Beard...............................100/-','Hair Spa..........................400/-','Gel Manicure..................800/-','Gel pedicure..................800/-','Cleanup...........................500/-','Facial Tretment...............500/-','Hair Color....................1200/-']


function Menimg(){
    return(
        <div className="main-class">
            <div className="white-smoke---shape">

            </div>
            
             <div className="male-pic"> 
                <img src={Malephoto}/>
            </div>

            <div className="main-class2">
                <p className="male-s"> Male Services</p>
                {maleSer.map((service) =>(
                <div className="maleservice">{service}
                 <p className="length">Service length 25-30 minutes</p>
                <button className="bookbtn">Booking</button>
                </div>
                
            ))}
            
            </div>

        </div>

    )
}
export default Menimg;

