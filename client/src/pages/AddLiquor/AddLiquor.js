import React, { Component } from "react";
import LiquorForm from "./LiquorForm.js";
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";
<<<<<<< HEAD
import Profile from "../../Profile/Profile"
=======
import AutoSelect from "../../utils/Select"
>>>>>>> fbe11331e9aa7f739372b9b0369309442d638b49

class AddLiquor extends Component {
  state = {
    name: "",
    type: "",
    bottleVolume: "",
    bottleCost: "",
    userID: ""
  };

  // Sets a new search state based on the user input
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  };

  // Grabs the user's liqour input from the state and saves it in the mongo database
  handleSaveLiquor = event => {
    event.preventDefault();
    console.log(this.props.auth.userProfile.sub)
    API.saveLiquor({
      name: this.state.name,
      type: this.state.type,
      bottleVolume: this.state.bottleVolume,
      bottleCost: this.state.bottleCost,
      userID: this.props.auth.userProfile.sub
    })
      .catch(err => console.log(err));
    this.setState({ name: "", type: "", bottleVolume: "", bottleCost: "" })
  };

  getProfile = (profile) => {
    console.log("++++++++++++++++++",profile)
  }
  render() {

    const { isAuthenticated } = this.props.auth;


    return (

      <div>
        <NavTabs {...this.props} />
      {
        isAuthenticated() && (
        <div>
          
          <LiquorForm
            name={this.state.name}
            type={this.state.type}
            bottleVolume={this.state.bottleVolume}
            bottleCost={this.state.bottleCost}
            handleSaveLiquor={this.handleSaveLiquor}
            handleInputChange={this.handleInputChange}
            userID={this.state.userID}
          />
        </div>
        )  
      }
      { isAuthenticated() && (<Profile {...this.props} />) }
      </div>
    )
  }
};

export default AddLiquor;
