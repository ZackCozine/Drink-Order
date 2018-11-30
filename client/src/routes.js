import React from 'react';
import { Route, Router } from "react-router-dom";
import App from "./App";

import Auth from "./Auth/Auth";

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