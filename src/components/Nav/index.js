import React from "react";
import "./style.css";
import SearchBox from "../SearchBox/searchBox";

function Nav({ handleSearchChange }) {
  return (
   <nav className='navbar navbar-expand navbar-light bg-light'>
     <div className='navbar-collapse row' id='navbar'>
     <h1 className="p-2 m-2">Employee Directory</h1>
       <SearchBox handleSearchChange={handleSearchChange}/>
     </div>
   </nav>
  );
}

export default Nav;
