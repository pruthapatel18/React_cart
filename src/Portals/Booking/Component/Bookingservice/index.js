import React from "react";
import Bookingpic3 from '../../../../../src/Assets/image/Bookingpic3.jpg';
import "./Bookingservice.css";


function BookingService(){
    return(
        <div className="maiph">
        
       
             <div className="mph1"> 
                <img src={Bookingpic3}  />
            </div>
            <div className="main-back-ground">
            <input type ="text" className="FN" placeholder=" First Name"  size="25"></input>
            <input type ="text" className="FN1" placeholder=" Last Name"  size="25"></input>
            <input type ="text" className="FN2" placeholder=" Phone Number"  size="25"></input>
            <input type ="text" className="FN3" placeholder=" Email Address"  size="25"></input>
            {/* <input type ="text" className="FN4" placeholder=" Select Female Service"  size="25"></input> */}
            <select className="drop">
                <option value="">Select Female Service</option>
                <option value="Hair Cut">Hair Cut</option>
                <option value="Wax Tretment">Wax Tretment</option>
                <option value="Cleanup">Cleanup </option>
                <option value="Hair Extension">Hair Extension</option>
                <option value="24k gold Facial">24k gold Facial</option>
                <option value="Paraffin Mask">Paraffin Mask</option>
                <option value="Facial Tretment">Facial Tretment</option>
                <option value="Hair Color">Hair Color</option>
            </select>

            <select className="drop1">
                <option value="">Select Male Service</option>
                <option value=" Classic Hair Cut">Classic Hair Cut</option>
                <option value="Beard">Beard</option>
                <option value="Hair Spa">Hair Spa </option>
                <option value="Gel Manicure">Gel Manicure</option>
                <option value="Gel pedicure">Gel pedicure</option>
                <option value="Paraffin Mask">Cleanup Tretment</option>
                <option value="Facial Tretment">Facial Tretment</option>
                <option value="Hair Color">Hair Color</option>
            </select>

            <button className="book-done">BOOKING DONE</button> 
           
</div>
        </div>

    )
}
export default BookingService;

