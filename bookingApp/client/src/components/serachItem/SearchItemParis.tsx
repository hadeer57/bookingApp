import React from "react";
import { useNavigate } from "react-router-dom";
import "../serachItem/SearchItem.css"

const SearchItem = () => {
    
const navigate = useNavigate();
    return (
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/160701344.jpg?k=fc62b5f1cb6500a2e70cc3cc2bfa8075b14781943c3a35d49ddb2bbde74c2801&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1  className="siTitle">Pullman Paris Tour Eiffel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
          The 4-star hotel Pullman Paris Tour Eiffel is set at the foot of the Eiffel Tower and the Trocadero.
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.2</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">100$</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button onClick={()=> navigate('/hotels/paris')} className="siCheckButton">See availability</button>
            <button className="siCheckButton" onClick={()=> navigate('/navigation/paris')}>See on Google MAp</button>

          </div>
        </div>
      </div>
    );
  };
  
  export default SearchItem;