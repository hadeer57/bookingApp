import React from "react";
import Feature from "../../components/feature/Feature";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import"../booking/Booking.css";

const Booking = () =>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeWrapper">
                <Feature/>
            </div>
        </div>

    )
}

export default Booking