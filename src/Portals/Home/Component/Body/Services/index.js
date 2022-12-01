
import React  from 'react';
import './Service.css';

const maleSer = ['Classic Hair Cut.........................200/-','Beard...........................................100/-','Hair Spa.....................................400/-','Gel Manicure.............................800/-','Gel pedicure.............................800/-','Cleanup Tretment ..................500/-','Facial Tretment........................500/-','Hair Color................................1200/-']
const femaleSer = ['Hair Cut...................................250/-','Wax Tretment........................500/-','Cleanup Tretment ................500/-','Hair Extension........................2500',' 24k gold Facial ..................1500/-','Paraffin Mask........................350/-','Facial Tretment.....................500/-','Hair Color.............................1200/-']


function service(){

    return(
        <div className="male">
            <div className='servi'>
                <p className='title-name'>Our Male Services</p>
            {maleSer.map((service) =>(
                <div className="service">{service}
                <p className='len'>Service length 25-30 minutes </p>
                </div>
    
                
            )
            )}
            </div>
            <div className='servi2'>
                <p className='title-name1'>Our Female Services</p>
            {femaleSer.map((service) =>(
                <div className="service2">{service}
                <p className='len1'>Service length 25-30 minutes </p>

                </div>
            ))}
            </div>
        </div>
    );
};

export default service;





