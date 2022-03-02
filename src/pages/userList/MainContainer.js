import React from "react";
import "./MainContainer.css";
import Banner from "../../img/earth.jpg"

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textcontainer">
          <h1>Earth Roastery</h1>
          <p>Everything you need in one page</p>
        </div>
        </div>

     



      </div>

      <div className="right"></div>
    </div>
  );
}

export default MainContainer;
