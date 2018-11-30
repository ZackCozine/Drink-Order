import React from 'react';
import { Route, Router } from "react-router-dom";
import App from "./App";
import Login from './pages/Login/Login';
import Callback from "./Callback/Callback"
import Home from './pages/HomeLoggedIn/HomeLoggedIn'
import LiquorList from "./pages/LiquorList/LiquorList"
import DrinkList from "./pages/DrinkList/DrinkList"
import Auth from "./Auth/Auth";
import history from './history'

const auth = new Auth();







return (
      <Router>
          <div>
            <NavTabs />
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/LiquorList" component={LiquorList} />
            <Route exact path="/DrinkList" component={DrinkList} />
          </div>
        </Router>
    )