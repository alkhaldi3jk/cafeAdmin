import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { Box, TextField, Button } from "@material-ui/core";
import { queryAllByAltText } from "@testing-library/react";

function Search(props) {

  const [query, setQuery] = useState("");
  
  return (
    <div className="topcontainer">
    <div className="inputBox">
      <input type="text" placeholder="Search barcode" onChange={(event) => props.setQuery(event.target.value)}/>
      <i>
        <BiSearchAlt setQuery={setQuery}/>
      </i>
    </div>
    </div>
    
  );
}

export default Search;
