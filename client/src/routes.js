import React from 'react';
import { Route, Router } from "react-router-dom";
import Callback from "./Callback/Callback"
import Home from './pages/HomeLoggedIn/HomeLoggedIn'
import EditLiquor from "./pages/EditLiquor/EditLiquor"
import DrinkList from "./pages/DrinkList/DrinkList"
import Auth from "./Auth/Auth";
import history from './history';
import AddLiquor from './pages/AddLiquor/AddLiquor'

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route exact path="/EditLiquor" render={(props) => <EditLiquor auth={auth} {...props} /> } />
                <Route exact path="/DrinkList" render = {(props) => <DrinkList auth={auth} {...props} /> } />
                <Route exact path ="/AddLiquor" render = {(props)=><AddLiquor auth = {auth}{...props} /> } />           }
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </div>
            </Router>
        );
}