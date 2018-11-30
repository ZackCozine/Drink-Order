import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";
import {Navbar, NavItem, Icon} from 'react-materialize'

// Navbar for switching pages
const NavTabs = () => (
  // <ul className="nav">
  //   <li className="nav-item nav-link"><b>Google Books:</b></li>
  //   <li className="nav-item">
  //   <Button waves='light'>Hello<Icon left>save</Icon></Button>  
  //     <Link
  //       to="/"
  //       className={
  //         window.location.pathname === "/" ? "nav-link active" : "nav-link"
  //       }
  //     >
  //       Search
  //     </Link>
  //   </li>
  //   <li className="nav-item">
  //     <Link
  //       to="/Saved"
  //       className={
  //         window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"
  //       }
  //     >
  //       Saved
  //     </Link>
  //   </li>
  // </ul>
<div class="nav-wrapper brown darken-3">
  <div class="container">
    <Navbar brand='drink order' class="navbar brown darken-3" right>
      <NavItem><Link to="/" className={window.location.pathname ==="/" ? "nav-link active" : "nav-link"}>Login</Link></NavItem>
      <NavItem><Link to="/Home" className={window.location.pathname ==="/Home" ? "nav-link active" : "nav-link"}>Home</Link></NavItem>
      <NavItem><Link to="/LiquorList" className={window.location.pathname ==="/LiquorList" ? "nav-link active" : "nav-link"}>Liquor</Link></NavItem>
      <NavItem><Link to="/DrinkList" className={window.location.pathname ==="/DrinkList" ? "nav-link active" : "nav-link"}>Drink List</Link></NavItem>
      <NavItem><Link to="/AddLiquor" className={window.location.pathname ==="/AddLiquor" ? "nav-link active" : "nav-link"}>Add Liquor</Link></NavItem>
    </Navbar>
  </div>
</div> 
);

export default NavTabs;
