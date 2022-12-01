import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="main_footer">
            <div className="footer_left">
                <h1>Stay in the Know</h1>
                <input type ="text" className="itype" placeholder="Email addresss" ></input>
                <button className="sub-btn">subscribe</button>
                <h4>By signing and clicking Submit, you affirm you have read and agree to the</h4><h4> Privacy Policy and Terms of Use, and want to receive news.</h4>
            </div>
            <div className="footer_center">
                <h2>Get in Touch</h2>
                <h3>8721 M Central Avenue,Los Angeles,</h3><h3>CA 90036,hello@yourdomain.com</h3>
                <h3>+12 9 8765 4321</h3>
            </div>
            <div className="footer_right">
            <h1>Social</h1>
            <h4>Instagram</h4>
            <h5>Twitter</h5>
            <h6>Youtube</h6>
            

            </div>
        </div>
    )

}
 export default Footer;