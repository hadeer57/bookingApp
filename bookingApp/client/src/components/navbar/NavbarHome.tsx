import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../navbar/Navbar.css"

const NavbarHome = () =>{

const navigate = useNavigate();
    return(
        <div className="navbarHome">
            <div className="navwrapper">
            <button  onClick={()=>navigate('/booking')} className="logo">AdventureBooking</button>
                <div className="navItems">
                <button onClick={()=>navigate('/')} className="navButton">Logout</button>
                </div>
            </div>
            </div>
    )
}

export default NavbarHome