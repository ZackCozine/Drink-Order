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

    const { isAuthentcated } = this.props.auth;
      
    return (

      <div>
        <NavTabs {...this.props} />
        <div>
          <LiquorForm
            name={this.state.name}
            type={this.state.type}
            bottleVolume={this.state.bottleVolume}
            bottleCost={this.state.bottleCost}
            handleSaveLiquor={this.handleSaveLiquor}
            handleInputChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default AddLiquor;
