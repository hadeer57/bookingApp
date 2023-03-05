import React from "react";
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HotelParis = () => {
  const navigate = useNavigate();
const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378394358.jpg?k=da22854728987ae70675e6584ff3b761d57f7bd44c9d0ee63034a8ead2af342e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160701344.jpg?k=fc62b5f1cb6500a2e70cc3cc2bfa8075b14781943c3a35d49ddb2bbde74c2801&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312032261.jpg?k=03fa2ff65255a31e3111cbd533bd287ad91a2c2e38749621a8c1c3d7efff3731&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312032310.jpg?k=75a2b07e35e4b03bc5ac1dec0f7dbbe0966d79cabace0ae6f40d1d320d418959&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/landmark/max1024/204733.webp?k=0e71c524a0dfb4777735ba5fdd38ff7dacfcbe8fe64df559e9f88739a744f017&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/landmark/max1024/241703.webp?k=46de0e6887736db3fd694288faf6223dbdc2a1c47513ecbea913cc76faef2bed&o=",
    },
  ];

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

    setSlideNumber(newSlideNumber)
  };

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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
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
          <h1 className="hotelTitle">Pullman Paris Tour Eiffel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>eiffel tower paris 
            <button onClick={()=> navigate(`/navigation/paris`)} className="hotelPriceHighlightBtn">show on google map</button>
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              The 4-star hotel Pullman Paris Tour Eiffel is set at the foot of the Eiffel Tower and the Trocadero. Open 24 hours a day, the fitness room offers cardio equipment, and you can enjoy dining on the terrace at the restaurant, 
              Frame. The property is located 3.1 mi from the Parc des Princes Stadium, only a 10-minute drive away.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 3-night stay!</h1>
              <span>
                Located in the real heart of paris, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
     
 
      </div>
    </div>
  );
};

export default HotelParis;