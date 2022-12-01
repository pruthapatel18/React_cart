// import React from "react";

// const  workingtime =['Mon – Wed	  -	    10:00 AM - 9:00 PM','Thursday	-	10:00 AM - 7:30 PM','Friday	-	10:00 AM - 9:00 PM','Sun - Sun	-	10:00 AM - 5:00 PM'];
// const  title=[working time]

// function time(){

//     return(
//         <div className="WT">
//          <div className="WO">
//             {title.map((time) => (
//                 <div className="time">{time}

//             ))}
            
//          </div>   
//         <div className="wt">
//             {workingtime.map((time) =>(
//                 <div className="time">{time}</div>
//             ))}
//         </div>
//         </div>
//     );
// };

// export default time;

import React from "react";
import './WorkingTime.css';

function time(){
    return(
        <div className="wt">
            <div className="title">
                <p>Working Time</p>
            </div>
            <div className="tit">
                <p>Mon To Wed	-	10:00 AM - 9:00 PM</p>
                <p>Thursday	-	10:00 AM - 7:30 PM</p>
                <p>Friday	-	10:00 AM - 9:00 PM</p>
                 <p> Sun To Sun	-	10:00 AM - 5:00 PM</p>


            </div>
            <div className="workinghour">
                <p>Working hours</p>
            </div>
            <div className="cont">
                <p>As a hairstylist, you get to be creative every day and you have the power to awaken the beauty within your clients they never knew was there. There are many moments of inspiration, laughter, and appreciation that only a hairstylist or hair-lover would understand and we provide this services in our convenient time.

</p>
            </div>
        </div>

    )


}
 export default time;