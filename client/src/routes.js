import React from 'react';
import { Route, Router } from "react-router-dom";
import Callback from "./Callback/Callback"
import Home from './pages/HomeLoggedIn/HomeLoggedIn'
import EditLiquor from "./pages/EditLiquor/EditLiquor"
import AddDrink from "./pages/AddDrink/AddDrink"
import AddDrinkHC from "./pages/AddDrinkHC/AddDrinkHC"
import AddDrinkHC2 from "./pages/AddDrinkHC/AddDrinkHC2"
import Auth from "./Auth/Auth";
import history from './history';
import AddLiquor from './pages/AddLiquor/AddLiquor'
// import LiquorDetail from './pages/LiquorDetail/LiquorDetail'


const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route exact path="/EditLiquor" render={(props) => <EditLiquor auth={auth} {...props} />} />
                <Route exact path="/AddDrink" render={(props) => <AddDrink auth={auth} {...props} />} />
                <Route exact path="/AddDrinkHC" render={(props) => <AddDrinkHC auth={auth} {...props} />} />
                <Route exact path="/AddDrinkHC2" render={(props) => <AddDrinkHC2 auth={auth} {...props} />} />
                <Route exact path="/AddLiquor" render={(props) => <AddLiquor auth={auth}{...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }} />
            </div>
        </Router>
    );
}