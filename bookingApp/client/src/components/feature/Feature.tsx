import React from "react";
import "../feature/Feature.css"

const Feature = () =>{
    return(
        <div className="feature">
            <div className="featureItem">
                <img src="https://r-xx.bstatic.com/xdata/images/region/250x250/50317.jpg?k=f8ae081c5dac6e75152bf0c424fd1c3135e6b14b396b2834c92bd9365dd2d53c&o=" alt="" className="featureImg" />
                <div className="featureTitles">
                    <h1>Tyrol</h1>
                    <h2>12,323 properties</h2>
                </div>
            </div>
            <div className="featureItem">
                <img src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/egypt/cedcd0c24d9687c1cac79655c759151a01470a99.jpg" alt="" className="featureImg" />
                <div className="featureTitles">
                    <h1>Cairo</h1>
                    <h2>6,323 properties</h2>
                </div>
            </div>
            <div className="featureItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/655536.webp?k=696e207f5e68e1c7055b19f46cde21a24d4eaea48a2f67c66c233a9b4ec5d70a&o=" alt="" className="featureImg" />
                <div className="featureTitles">
                    <h1>Santorini</h1>
                    <h2>1,762 properties</h2>
                </div>
            </div>
        </div>

    )
}

export default Feature