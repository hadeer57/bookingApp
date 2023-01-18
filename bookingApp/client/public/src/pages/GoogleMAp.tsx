import React, { useRef, useState } from "react";
import {GoogleMap, useLoadScript, Marker, useJsApiLoader, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";





function LoadGoogleMap() {

  const{ isLoaded}= useJsApiLoader({ 
    googleMapsApiKey: "AIzaSyBubWJhKGZ0AOZxTUmyvHfghPuVezVYbDE",
    libraries:[
      'places'
    ]
})
  if (!isLoaded) {
    return <div>Loading...</div>
  }
    return (
  <div className="box">
          <div>
    <Autocomplete> 
       <input type="text" placeholder="Origin" />
      </Autocomplete>
       <Autocomplete>
        <input type="text" placeholder="Destination" />
        </Autocomplete>
        </div>
        <div>
        <GoogleMap zoom={4} center={{lat:48.8584 , lng:2.2945}} mapContainerStyle={{width:'100%', height:'100vh'}} >
          <Marker position={{lat:48.8584 , lng:2.2945}}/>
        </GoogleMap>    
        </div>
  
       
  </div>
  
    );
  }
  
  export default LoadGoogleMap;