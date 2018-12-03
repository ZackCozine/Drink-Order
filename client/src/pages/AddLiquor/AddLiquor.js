import React, { Component } from "react";
import LiquorForm from "./LiquorForm.js";
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";

class AddLiquor extends Component {
  state = {
    name: "",
    type: "",
    bottleVolume: "",
    bottleCost: ""
  };

  // Sets a new search state based on the user input
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // Grabs the user's liqour input from the state and saves it in the mongo database
  handleSaveLiquor = event => {
    // console.log("handleSaveLiquor");
    event.preventDefault();
    API.saveLiquor({
      name: this.state.name,
      type: this.state.type,
      bottleVolume: this.state.bottleVolume,
      bottleCost: this.state.bottleCost
    })
      .catch(err => console.log(err));
      this.setState({ name: "", type: "", bottleVolume: "", bottleCost: "" })
  };

  render() {
    return (
      <div>
        <NavTabs {...this.props} />
        <LiquorForm
          name={this.state.name}
          type={this.state.type}
          bottleVolume={this.state.bottleVolume}
          bottleCost={this.state.bottleCost}
          handleSaveLiquor={this.handleSaveLiquor}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default AddLiquor;
