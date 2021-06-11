import React from "react";
import "./style.css";
import SearchBox from "../SearchBox/searchBox";

function Nav({ handleSearchChange }) {
  return (
   <nav className='navbar navbar-expand navbar-light bg-light'>
     <div className='navbar-collapse row' id='navbar'>
       <SearchBox handleSearchChange={handleSearchChange}/>
     </div>
   </nav>
  );
}

export default Nav;
