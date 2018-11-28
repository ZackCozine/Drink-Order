import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";

// Navbar for switching pages
const NavTabs = () => (
  <ul className="nav">
    <li className="nav-item nav-link"><b>Google Books:</b></li>
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Search
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/Saved"
        className={
          window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"
        }
      >
        Saved
      </Link>
    </li>
  </ul>
);

export default NavTabs;
