import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs/NavTabs";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import Login from "./pages/Login/Login";
import DrinkList from "./pages/DrinkList/DrinkList"
import Home from "./pages/HomeLoggedIn/HomeLoggedIn";
import LiquorList from "./pages/LiquorList/LiquorList";
import RecipeEdit from "./pages/RecipeEdit/RecipeEdit";


const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/LiquorList" component={LiquorList} />
      <Route exact path="/DrinkList" component={DrinkList} />
      <Route exact path="/RecipeEdit" component={RecipeEdit} />
    </div>
  </Router>
);

export default App;
