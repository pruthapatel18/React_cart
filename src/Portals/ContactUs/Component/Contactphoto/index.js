import React from "react";
import "./Contactphoto.css";
import contactpic02 from "../../../../Assets/image/contactpic02.png";
import contactpic01 from "../../../../Assets/image/contactpic01.jpg";
import contactpic03 from "../../../../Assets/image/contactpic03.jpg";

function Coimg(){
    return(
        <div className="mainph">
            <div className="white-smoke--shape">

            </div>
                    
                <img className="mainp" src={contactpic01}/><br></br>
                <img className="mainpa" src={contactpic03}/><br></br>
                <img className="mainpaa" src={contactpic02}/>

                <div className="get">
                <p className="in">Get In Touch</p>
                 <input type ="text" className="name" placeholder=" First Name"  size="50"></input>
                 <input type ="text" className="name1" placeholder=" Last Name"  size="50"></input>
                <input type ="text" className="name2" placeholder="  Email Address"  size="50"></input>
                <input type ="text" className="name3" placeholder="Your Query "  size="50"></input>
                <button className="done-btn">DONE</button>
                </div> 
            
         </div>

    )
}
export default Coimg;

