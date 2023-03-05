import React, { useContext, useEffect, useState } from "react";
import "../hotel/Hotel.css"
import HeaderHotels from "../../components/header/HeaderHotels";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import { AuthContext } from "../../components/context/AuthContext";
import { SearchContext } from "../../components/context/SearchContext";
import axios from "axios";
import { Data } from "@react-google-maps/api";

interface HotelInfo {
  name: string;
  type: string;
  country: string;
  city: string;
  address: string;
  distanceFromCenter:String;
  images:[String];
  description:String;
  rating:Number;
  rooms:[String];
  cheapestPrice:Number;
  featured:Boolean;
}


const Hotel = () => {

    const navigate = useNavigate();
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [hotel, setHotel] = useState<any[]>([]);
    // const [openModal, setOpenModal] = useState(false);
    
    const {id} = useParams();
    const {data}:any= useFetch(`/hotels/get-hotel/${id}`);
   console.log(data)
    
    const handleOpen = (i:any) => {
      setSlideNumber(i);
      setOpen(true);
    };
  
    const handleMove = (direction:any) => {
      let newSlideNumber;
  
      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber);
    };
  
    // const handleClick = () => {
    //   if (user) {
    //     setOpenModal(true);
    //   } else {
    //     navigate("/login");
    //   }
    // };
    return (

      <div>
        <Navbar />
        <HeaderHotels />
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="close"
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img
                    src={data.images[slideNumber]}
                    alt=""
                    className="sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location – {data.distanceFromCenter}m from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over ${data.cheapestPrice} at this property and get a
                free airport taxi
              </span>
              <div className="hotelImages">
                {data.images?.map((i:any) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={data.images}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">{data.description}</p>
                </div>
                <div className="hotelDetailsPrice">
                  {/* <h1>Perfect for a {days}-night stay!</h1> */}
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    {/* <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "} */}
                    {/* nights) */}
                  </h2>
                  {/* <button onClick={handleClick}>Reserve or Book Now!</button> */}
                </div>
              </div>
            </div>
          </div>
         {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>} */}
      </div>
//     );
//   };
                )}
  export default Hotel;