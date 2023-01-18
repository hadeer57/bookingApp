import React from "react";
import { useNavigate } from "react-router-dom";
import "../navbar/Navbar.css"

const Navbar = () =>{

    const navigate = useNavigate();
    return(
        <div className="navbar">
            <div className="navwrapper">
                <button  onClick={()=>navigate('/booking')} className="logo">AdventureBooking</button>
                <div className="navItems">
                <button onClick={()=>navigate('/')} className="navButton">Logout</button>
             
                </div>
            </div>
            </div>
    )
}

export default Navbar