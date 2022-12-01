import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import slide01 from '../../../../../Assets/image/slide01.jpg';
import slide02 from '../../../../../Assets/image/slide02.png';
import slide03 from '../../../../../Assets/image/slide03.jpg';
import './Slider.css'

function Slider(){
    const [selectedImage, setSelectedImage]= useState(0)
    const [allImage, setAllImage] = useState([slide01, slide02, slide03])


    useEffect(() => {
        setInterval(() => {
            setSelectedImage(selectedImage => selectedImage < 2 ? selectedImage + 1  : 0)
        }, 2000)
    }, [])

    return (
        <div className="description">
            <img src={allImage[selectedImage]} />
            <h1 className="des">WELCOME TO OUR STUDIO</h1>
            <NavLink to="/Booking">
            <button className="bbtn">Booking</button>
            </NavLink>
        </div>
    )
}

export default Slider;