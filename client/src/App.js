import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Link } from 'react-router-dom';
import './App.css'


class App extends Component {

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
    const { isAuthenicated } = this.props.auth;

    return (
      
      <div class="nav-wrapper brown darken-3">
        <div class="container">
          <Navbar brand='drink order' class="navbar brown darken-3" right>
            <NavItem>
              <Link to="/" 
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Login</Link></NavItem>
            <NavItem>
              <Link to="/Home" 
              className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>Home</Link></NavItem>
            <NavItem>
              <Link to="/LiquorList" 
              className={window.location.pathname === "/LiquorList" ? "nav-link active" : "nav-link"}>Liquor</Link></NavItem>
            <NavItem>
              <Link to="/DrinkList" 
              className={window.location.pathname === "/DrinkList" ? "nav-link active" : "nav-link"}>Drink List</Link></NavItem>
          </Navbar>
        </div>
      </div>

    )
  }



};

export default App;
