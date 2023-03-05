import React, { useState } from 'react'
import axios  from "axios"
import SearchItem from '../../components/serachItem/SearchItemParis'


const GetHotelByCity = () => {
    const [filterCity, setFilteredCity] = useState([])
function handleSearch(ev:any){
    ev.preventDefault()
    const city = ev.target.city.value;
    axios
    .post("/hotels/getbycity", { city})
    .then((data) => {
 
        setFilteredCity(data.data)
   

    })
    .catch((err) => console.error(err));
}
  return (
    <div>
       {/* <form onSubmit={handleSearch}>
       
        <label htmlFor="city">city</label>
        <input type="text" name="city" />
       
        <input type="submit" value="search" />
        </form> */}
     { filterCity.map((item) => {
      return (
        <SearchItem />
     
      );
    })}
    </div>
  )
}

export default GetHotelByCity








// const render = (hotels) => {

//     hotels.forEach(el => {
//             <div>
//                 <h3>${el.name}</h3>
//                 <p>${el.location}</p>
//             </div>
        
//     });

// }

