import React from "react";
import "./MainRightTopCard.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


function MainRightTopCard() {
  return (
    <div className="featured1">
    <div className="featuredItem1">
    <span className="featuredTitle1">Revenue</span>
    <div className="featuredMoneyContainer1">
      <span className="featuredMoney1">$2,225</span>
      <span className="featuredMoneyRate1">
        +2.4 <ArrowUpward className="featuredIcon1"/>
      </span>
    </div>
    <span className="featuredSub">Compared to last month</span>
  </div>
  </div>
  );
}

export default MainRightTopCard;