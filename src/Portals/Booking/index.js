import React from "react";
import BookingImage from "./Component/BookingImage";
import BookingService from "./Component/Bookingservice";

function Book(){
    console.log('inn')
    return(
        <div>
            
            <BookingImage/>
            <BookingService />
        </div>
    )
}
export default Book;