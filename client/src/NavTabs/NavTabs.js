<<<<<<< HEAD
import React, { Component } from "react";
import { Navbar, NavItem, Icon } from 'react-materialize'

export default class NavTabs extends Component {

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }


    render() {
        
        const { isAuthenticated } = this.props.auth;

        return (

            <div class="nav-wrapper brown darken-3">
                <div class="container">
                    <Navbar brand='drink order' class="navbar brown darken-3" right>
                        {/* Login or Logout button */}

                        {
                            !isAuthenticated() && (
                                <NavItem
                                    id="qsLoginBtn"
                                    className='nav-link'
                                    onClick={this.login.bind(this)}>
                                    Log In
                        </NavItem>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <NavItem
                                    id="qsLogoutBtn"
                                    className="nav-link"
                                    onClick={this.logout.bind(this)}>
                                    Logout
                        </NavItem>
                            )
                        }

                        {/* Home button */}
                        <NavItem
                            onClick={this.goTo.bind(this, 'Home')}
                            className="nav-link">Home</NavItem>
                        {/* Liquor list button */}


                       {
                           isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'LiquorList')}
                                className="nav-link">Liquor</NavItem>
                           )
                        }

                        {/* Drink list button */}

                        {
                            isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'DrinkList')}
                                className="nav-link">Drink List</NavItem>
                            )
                        }
                    </Navbar>
                </div>
            </div>

        )
    }



};
=======
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
      <NavItem><Link to="/LiquorList" className={window.location.pathname ==="/LiquorList" ? "nav-link active" : "nav-link"}>Liquor List</Link></NavItem>
      <NavItem><Link to="/DrinkList" className={window.location.pathname ==="/DrinkList" ? "nav-link active" : "nav-link"}>Drink List</Link></NavItem>
      <NavItem><Link to="/AddLiquor" className={window.location.pathname ==="/AddLiquor" ? "nav-link active" : "nav-link"}>Add Liquor</Link></NavItem>
    </Navbar>
  </div>
</div> 
);

export default NavTabs;
>>>>>>> master
