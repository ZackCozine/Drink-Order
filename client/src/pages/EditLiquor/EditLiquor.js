import React, { Component } from "react";
import LiquorList from "./LiquorList.js";
import LiquorHeader from "./LiquorHeader.js";
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";

class EditLiquor extends Component {
  state = {
    Liquor: [],
    name: "",
    type: "",
    bottleVolume: "",
    bottleCost: "",
    userID: ""
  };

  // When page is displayed, loadLiquor is called
  componentDidMount() {
    this.loadLiquor();
  }

  // Loads saved liquor from mongo database
  loadLiquor = () => {
    API.getLiquor()
      .then(res => {
        this.setState({ Liquor: res.data});
      })
      .catch(err => console.log(err));
  };

  // Grabs the id of the chosen liquor from the button name and deletes it from the mongo database
  handleDeleteLiquor = event => {
    event.preventDefault();

    const id = event.target.id;
    API.deleteLiquor(id)
      .then(res => this.loadLiquor())
      .catch(err => console.log(err));
  };

   // Sets a new search state based on the user input
   handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // Grabs the user's updated liqour input from the state and saves it in the mongo database
  handleUpdateLiquor = event => {
    event.preventDefault();

    const id = event.target.id;
    const index = event.target.name;
    let name = this.state.name? this.state.name: this.state.Liquor[index].name;
    let type = this.state.type? this.state.type: this.state.Liquor[index].type;
    let bottleVolume = this.state.bottleVolume? this.state.bottleVolume: this.state.Liquor[index].bottleVolume;
    let bottleCost = this.state.bottleCost? this.state.bottleCost: this.state.Liquor[index].bottleCost;
    
    API.updateLiquor(id,{
      name: name,
      type: type,
      bottleVolume: bottleVolume,
      bottleCost: bottleCost
    })
      .then(res => this.loadLiquor())
      .catch(err => console.log(err));
      this.setState({ name: "", type: "", bottleVolume: "", bottleCost: "" })
  };

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <NavTabs {...this.props} />
        {
          isAuthenticated() && (
          <LiquorHeader/>
          )
        }
        {
          isAuthenticated() && (
          <LiquorList 
            name={this.state.name}
            type={this.state.type}
            bottleVolume={this.state.bottleVolume}
            bottleCost={this.state.bottleCost}
            Liquor={this.state.Liquor}
            handleInputChange={this.handleInputChange}
            handleDeleteLiquor={this.handleDeleteLiquor}
            handleUpdateLiquor={this.handleUpdateLiquor}
            userID = {this.state.userID}
          />
          )
        }
      </div>
    );
  }
}

export default EditLiquor;