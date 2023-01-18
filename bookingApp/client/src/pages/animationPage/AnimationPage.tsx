import React from"react";
import NavbarHome from "../../components/navbar/NavbarHome";
import"../animationPage/AnimationPage.css";

const Animation = () =>{
    return(
        <div>
        <div className="body">
            <NavbarHome/>
            <div className="night">
                <div className="surface"></div>
                <div className="car">
                <img src={require('../animationPage/imgs/Img_06.png')} alt="" />
                
                </div>
                <div className="note">Sorry we still working on this page, coming soon</div>

                
            </div>
        </div>
        </div>
    )
}

export default Animation