import './MaleHairService.css';
import React from 'react';

const MaleHairService = ({ images ,  title, content }) =>{
    return(
    <div className='ms'>
        <div className='ms2' >
            <img src= {images }/>
        <div className='Maleservice' >
            <h1> {title} </h1>
            <h2> {content} </h2>
        </div>
    </div>
    </div>
    )
}
        
export default MaleHairService;