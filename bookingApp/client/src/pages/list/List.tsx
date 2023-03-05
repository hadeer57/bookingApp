import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {format} from "date-fns"
import HeaderHotels from "../../components/header/HeaderHotels";
import Navbar from "../../components/navbar/Navbar";
import "../list/List.css"
import { DateRange } from "react-date-range";
import SearchItem from "../../components/serachItem/SearchItem";
import useFetch from "../../hooks/UseFetch"
import axios from "axios";
import SearchItemParis from "../../components/serachItem/SearchItemParis";

const List = () =>{
    const navigate = useNavigate();

    const location = useLocation();
    console.log (location)
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [adultCounter, setAdultCounter] = useState(location.state.adultCounter);
    const [childrenCounter, setChildrenCounter] = useState(location.state.childrenCounter);
    const [roomCounter, setRoomCounter] = useState(location.state.roomCounter);
    const [openDate, setOpenDate] = useState(false);
    // const [data, setData] = useState(false);
    const [hotels, setHotels] = useState([])

    // useEffect(()=>{
    //     (async ()=>{
    //         const { data } = await axios.post(`/hotels?city={destination}`)
    //         console.log(data)
    //         const {success, hotels}=data
    //         setHotels(hotels)
    //     })()
    // },[destination])

  

    //   const getHotelFromServer = async (ev: any) => {
    //     ev.preventDefault()

    //     const destinationFromForm = ev.target.elements.destination.value
    //     setDestination(destinationFromForm)
    //     }

    

    const { data,reFetch } = useFetch(
        `/hotels/getbycity?city=${destination}`
      );
    
      const handleClick = () => {
        reFetch();
      };

    return(
        <div>
            <Navbar/>
            <HeaderHotels/>
            <form  onSubmit={handleClick} className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="listTitle">Search</h1>
                    <div className="listItem">
                        <label>Destination:</label>
                        <input placeholder={destination} type="text" />
                    </div>
                    <div className="listItem">
                        <label htmlFor="">Check-in Dates:</label>
                        <span onClick={()=> setOpenDate(!openDate)}
                        >{`from ${format(date[0].startDate, "dd/MM/yyy")} to ${format(date[0].endDate, "dd/MM/yyy")}`}</span>
                       { openDate && (<DateRange
                        onChange={item=>setDate([item.selection])} 
                        minDate={new Date}  
                        ranges={date}
                        />)}
                    </div>
                    <div className="listItem">
                        <label >Options</label>
                        <div className="listOptions">
                        <div className="listOptionItem">
                            <span className="listOptionText">Adult
                            </span>
                            <input min={1} type="number" className="listOptionInput" placeholder={adultCounter}/>
                        </div>
                        <div className="listOptionItem">
                            <span className="listOptionText">Children
                            </span>
                            <input min={0} type="number" className="listOptionInput" placeholder={childrenCounter} />
                        </div>
                        <div className="listOptionItem">
                            <span className="listOptionText">Room
                            </span>
                            <input min={1} type="number" className="listOptionInput" placeholder={roomCounter} />
                        </div>
                        </div>
                    </div>
                    <button type="submit">Search</button>
                </div>
                <div className="listResult">
                    {
                        data.map(item=>(
                            <SearchItem item={item} />
                        ))
                    }
              </div>

              </div>
            </form>
        </div>
    )
}

export default List