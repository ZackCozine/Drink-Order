import React, { Component } from "react";
import NavTabs from "./NavTabs/NavTabs";

export default class App extends Component {
  

  render () {
      return (
      <NavTabs {...this.props} />
      )
  }
}


