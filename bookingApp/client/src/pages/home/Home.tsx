import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../home/Home.css"

const Home = () => {
const navigate = useNavigate();

  return (
    <div className='body'>
        <div className="wrapper">
        <div className="content">
            <h1 className='title'>Let's Start Our Adventuer Together</h1>
            {/* <p className='p'>join for more information for your next destenation: hotels, attractions resturant and more</p> */}
            <button className='btn' onClick={()=>navigate('./login')} >Login</button>
            <button className='btn' onClick={()=>navigate('./register')}>Register</button>
        </div>
        </div>
      
    </div>
  )
}

export default Home
