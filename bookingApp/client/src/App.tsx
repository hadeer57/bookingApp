import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import GoogleMap from "./pages/googleMap/GoogleMapParis"
import HotelParis from "./pages/hotel/HotelParis";
import Animation from "./pages/animationPage/AnimationPage";



function App(){
  return(
    <BrowserRouter>
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/booking" element={<Booking/>}/> 
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/paris" element={<HotelParis/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/navigation/paris" element={<GoogleMap/>}/>
      <Route path="/animation" element={<Animation/>}/>



    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;