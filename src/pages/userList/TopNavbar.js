import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";

const TopNavbar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs value={selectedTab} 
    onChange={handleChange}
    TabIndicatorProps={{
      style: {
        backgroundColor: "#023531"
       }
      }}
    >
      <Tab label="Pending" />
      <Tab label="Completed" />
      <Tab label="All" />
    </Tabs>
  );
};

export default TopNavbar;
