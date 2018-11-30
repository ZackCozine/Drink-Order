import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs/NavTabs";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import Login from "./pages/Login/Login";
import DrinkList from "./pages/DrinkList/DrinkList"
import Home from "./pages/HomeLoggedIn/HomeLoggedIn";
import LiquorList from "./pages/LiquorList/LiquorList";
import Auth from "./Auth/Auth";

class App extends component  {
  
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

    return (<div></div>)
  }

  

};

export default App;
