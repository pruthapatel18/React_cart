import './FemaleHairService.css';
import React from 'react';

const FemaleHairService = ({ images ,  title, content }) =>{
    return(

    <div className='females' >
        <div className='femaleservice' >
        <img src= {images }/>
        </div>
        <div className='Femaleservice' >
            <p> {title} </p>
        </div>
        <div className='fs'>
            <p> {content} </p>
        </div>
    </div>
    )
}
        
export default FemaleHairService;