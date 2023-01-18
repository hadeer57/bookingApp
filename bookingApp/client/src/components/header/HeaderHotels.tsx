import React from "react";
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome";
import {faBed, faPlane,faTaxi, faCar, faTree, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import { DateRange, DateRangePicker } from 'react-date-range';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../header/Header.css";

const HeaderHotels = () =>{
  const navigate = useNavigate();
return(
    
    <div className="headerHotels">
    <div className="headerWrapper">
       
        <div className="headerList">
  <div className="headerListItem active">
    <FontAwesomeIcon icon={faBed} />
            <button onClick={()=> navigate('/booking')}>Stays</button>
  </div>
  <div className="headerListItem">
    <FontAwesomeIcon icon={faPlane} />
            <button onClick={()=> navigate('/animation')}>Flights</button>
  </div>
  <div className="headerListItem">
    <FontAwesomeIcon icon={faCar} />
            <button onClick={()=> navigate('/animation')}>Car rental</button>
  </div>
  <div className="headerListItem">
    <FontAwesomeIcon icon={faTree} />
            <button onClick={()=> navigate('/animation')}>Attractions</button>
  </div>
  <div className="headerListItem">
    <FontAwesomeIcon icon={faTaxi} />
            <button onClick={()=> navigate('/animation')}>Airport Taxies</button>
  </div>
</div>

</div>
    </div>
)
}


export default HeaderHotels