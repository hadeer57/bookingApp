import React from "react";
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome";
import {faBed, faPlane,faTaxi, faCar, faTree, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import { DateRange, DateRangePicker } from 'react-date-range';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "../header/Header.css"
import { isHtmlElement } from "react-router-dom/dist/dom";


const Header = () =>{

    const navigate = useNavigate()
    
    const [destination, setDestination] = useState("");
    const [phDestination,setphDestination] = useState("Your next adventure?")
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date() ,
          endDate: new Date(),
          key: 'selection'
        }
        
      ]);
    const [adultCounter, setAdultCounter] = useState<number>(1);
    const [childrenCounter, setChildrenCounter] = useState<number>(0);
    const [roomCounter, setRoomCounter] = useState<number>(1);
    const [openOptions, setOpenOptions] = useState(false);

  function handleDestination(e:any){
    let newDestination = e.target.value
    try {
  
      setDestination(newDestination)

    } catch (error) {
      console.error(error);

    }
     
  }
  
  function countMinAdult(){
    setAdultCounter( prevCount => prevCount - 1)
  }

  function countPlusAdult(){
    setAdultCounter( prevCount => prevCount + 1)
  }

  function countMinChildren(){
    setChildrenCounter( prevCount => prevCount - 1)
  }

  function countPlusChildren(){
    setChildrenCounter( prevCount => prevCount + 1)
  }

  
  function countMinRoom(){
    setRoomCounter( prevCount => prevCount - 1)
  }

  function countPlusRoom(){
    setRoomCounter( prevCount => prevCount + 1)
  }




function handleSearch(){
try {
  if(!destination){
    setphDestination(prev=> prev= "Enter your destiantion") ;
    alert("enter your destination")  
  }
  else{
  navigate("/hotels", {state:{destination,date,adultCounter,childrenCounter,roomCounter}});
  };
} catch (error) {
  console.error(error);

}
}



    return(
        <div className="header">
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
        <h1 className="headerTitle"> A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">Find exclusive Genius rewards in every corner of the world!</p>        
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder={phDestination} 
            className="headerSearchInput" 
            onChange={handleDestination}/>
            </div>
            <div className="headerSearchItem" >
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span 
            onClick={()=>setOpenDate(!openDate)} 
            className="headerSearchText" 
            >{`${format(date[0].startDate, "dd/MM/yyy")} to ${format(date[0].endDate, "dd/MM/yyy")}`}</span>
            {openDate && 
            <DateRange className="date"
            editableDateInputs={true}
            onChange = {(item:any) => {    
                setDate([
                    item.selection
                ]);  
                  
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date}
            />}
               
             </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span  
            onClick={()=> setOpenOptions(!openOptions)}
            className="headerSearchText">{`${adultCounter} adult . ${childrenCounter} children . ${roomCounter} room`}</span>
            {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button disabled={adultCounter <= 1} className="optionCounterBtn" onClick={countMinAdult}>-</button>
                    <span className="optionCounterNumber">{adultCounter}</span>
                    <button className="optionCounterBtn" onClick={countPlusAdult}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button disabled={childrenCounter <= 0} className="optionCounterBtn" onClick={countMinChildren}>-</button>
                    <span className="optionCounterNumber">{childrenCounter}</span>
                    <button className="optionCounterBtn"onClick={countPlusChildren}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button disabled={roomCounter <= 1} className="optionCounterBtn" onClick={countMinRoom}>-</button>
                    <span className="optionCounterNumber">{roomCounter}</span>
                    <button className="optionCounterBtn" onClick={countPlusRoom}>+</button>
                    </div>
                </div>
            </div>}
            </div>
            <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>

            </div>
        </div>
        </div>
            </div>
    )
}

export default Header