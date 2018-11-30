import React, { Component } from "react";
import { Navbar, NavItem, Icon } from 'react-materialize'
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
            {/* Login or Logout button */}
            {
              !isAuthenicated() && (
                <NavItem
                  id="qsLoginBtn"
                  className='nav-link'
                  onClick={this.login.bind(this)}>
                  Log In
                  </NavItem>
              )
            }
            {
              isAuthenicated() && (
                <NavItem
                  id="qsLogoutBtn"
                  className = "nav-link"
                  onClick = {this.logout.bind(this)}>
                  Logout
                  </NavItem>
              )
            }
            
            {/* Home button */}
            <NavItem
               onClick = {this.goTo.bind(this, 'Home')}
              className="nav-link">Home</NavItem>
            {/* Liquor list button */}
            <NavItem
              onClick = {this.goTo.bind(this, 'LiquorList')} 
              className="nav-link">Liquor</NavItem>
            {/* Drink list button */}
            <NavItem
              onClick={this.goTo.bind(this, 'DrinkList')} 
              className="nav-link">Drink List</NavItem>
          </Navbar>
        </div>
      </div>

    )
  }



};

export default App;
