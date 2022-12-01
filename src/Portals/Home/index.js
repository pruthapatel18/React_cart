import React from "react";
import Header from './Component/Header';
import '../../../src/';
import Slider from './Component/Body/Slider';
import Service from './Component/Body/Services';
import FemaleHairService from './Component/Body/FemaleHairService';
import MaleHairService from './Component/Body/MaleHaieSevice';
import WorkingTime from './Component/Body/WorkingTime';
import Footer from './Component/Footer';
import IMAGE from './Component/Body/Image';
import photo09 from '../../Assets/image/photo09.png';
import photo7 from '../../Assets/image/photo7.png';

import Male01 from '../../Assets/image/Male01.png'
import photo001 from '../../Assets/image/photo001.png';
import Fecial from '../../Assets/image/Fecial.png';

function App(){
  return(
    <div className="App">
      
      <Slider />
      <IMAGE image={ photo09 } image1={ photo7 } /> 
      
       <Service />
      <FemaleHairService images={photo001} title = "Skilled Hair Art.." content= "Our customers are vital to us, so we constantly train our specialists to guarantee that all medicines are of the most astounding standard and that every customer gets the best consideration."/> 
      <MaleHairService images={Male01} title ="Reveal Stylish You.." content="We convey top-notch proficient hair items intended to guarantee our visitors put their best self forward, in the salon. The hair care items we convey have been cautiously picked put together both with respect to execution and eco-affectability.We provide services to suit your pretty face."/>
      <FemaleHairService images={Fecial} title = "Fresh,Shiny,Bright" content="Make your day shine with your shiny Skin"></FemaleHairService>
      <WorkingTime />
      
      </div>
      
  );
};

export default App;