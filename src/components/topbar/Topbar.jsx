import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Switch from "@mui/material/Switch";

export default function Topbar({ check, change}) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">#SayCoffee </span>
          <p style={{ fontSize: 12, marginRight: 10, fontWeight: 100 }}>
            Welcome to the family ❤️
          </p>
        </div>
        <div className="topRight">
          <p>Partner Dashboard</p>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <div className="switch">
          <Switch
            defaultChecked="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          onChange={change}
          checked={check}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
