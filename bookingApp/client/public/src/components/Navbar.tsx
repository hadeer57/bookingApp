import React from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
    return (
      <div className="navbar">
      <div className="navWrapper">
        <div className="logoImg" >
          <img src="https://th.bing.com/th/id/OIP.cFxLpm4ztwPMeV6UNL7pfQHaFC?pid=ImgDet&rs=1" alt="" />
</div>
         <div className="links">
          <Link className='navLink' to="/hotels"> <h5>Hotels</h5> </Link>
          <Link className='navLink' to="/resturants"> <h5>Resturants</h5> </Link>
          <Link className='navLink' to="/attractions"> <h5>Attractions</h5> </Link>
          <Link className='navLink' to="/Nature"> <h5>Nature</h5> </Link>
         <span>Author</span>
         <span className='write'><Link className='link' to="/write">write</Link></span>
         <span>logout</span>
         </div>

      </div>
        </div>
    );
  }
  
  export default Navbar;