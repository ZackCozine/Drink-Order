import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs/NavTabs";
import Login from "./pages/Login/Login";
import DrinkList from "./pages/DrinkList/DrinkList"
import Home from "./pages/HomeLoggedIn/HomeLoggedIn";
import LiquorList from "./pages/LiquorList/LiquorList";
import AddLiquor from "./pages/AddLiquor/AddLiquor";


const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/LiquorList" component={LiquorList} />
      <Route exact path="/DrinkList" component={DrinkList} />
      <Route exact path="/AddLiquor" component={AddLiquor} />

    </div>
  </Router>
);

export default App;
