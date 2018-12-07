import React, { Component } from "react";
import DrinkList from "./DrinkList.js";
import DrinkHeader from "./DrinkHeader.js";
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";
import Profile from "../../Profile/Profile"

class EditDrink extends Component {
  state = {
    Drink: [],
    name: "",
    type: "",
    bottleVolume: "",
    bottleCost: "",
    userID: ""
  };

  // When page is displayed, loadDrink is called
  componentDidMount() {
    console.log("mount",this.loadDrink())
    // if (this.props.auth.userProfile) this.loadDrink()
    console.log(this.props.auth)
  }

  // Loads saved Drink from mongo database
  // loadDrink = () => {
  //   API.getDrink()
  //     .then(res => {
  //       this.setState({ Drink: res.data});
  //     })
  //     .catch(err => console.log(err));
  // };

  // Loads saved Drink by user from mongo database 
  loadDrink = () => {
    this.props.auth.getProfile(this._loadDrink)
  }
  _loadDrink = (err, profile) => {
    console.log("Profile:", profile.nickname, err)
    // const userId = this.props.auth.userProfile.sub
    const userId = profile.nickname
    
    API.getDrinkByUser(userId)
      .then(res => {
        console.log('loadDrink: ', res.data);
        this.setState({ Drink: res.data});
      })
      .catch(err => console.log(err));
  };

  // Grabs the id of the chosen Drink from the button name and deletes it from the mongo database
  handleDeleteDrink = event => {
    const id = event.target.id;
    console.log("handleDeleteDrink: ", event.target.id)
    API.deleteDrink(id)
      .then(res => this.loadDrink())
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

  // Grabs the user's updated drink input from the state and saves it in the mongo database
  handleUpdateDrink = event => {
    event.preventDefault();
    console.log("Handling Drink update")
    const id = event.target.id;
    const index = event.target.name;
    let name = this.state.name? this.state.name: this.state.Drink[index].name;
    let type = this.state.type? this.state.type: this.state.Drink[index].type;
    let bottleVolume = this.state.bottleVolume? this.state.bottleVolume: this.state.Drink[index].bottleVolume;
    let bottleCost = this.state.bottleCost? this.state.bottleCost: this.state.Drink[index].bottleCost;
    
    API.updateDrink(id,{
      name: name,
      type: type,
      bottleVolume: bottleVolume,
      bottleCost: bottleCost
    })
      .then(res => this.loadDrink())
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
          <DrinkHeader/>
          )
        }
        {
          isAuthenticated() && (
          <DrinkList 
            name={this.state.name}
            type={this.state.type}
            bottleVolume={this.state.bottleVolume}
            bottleCost={this.state.bottleCost}
            Drink={this.state.Drink}
            handleInputChange={this.handleInputChange}
            handleDeleteDrink={this.handleDeleteDrink}
            handleUpdateDrink={this.handleUpdateDrink}
            userID = {this.state.userID}
          />
          )
        }
        { isAuthenticated() && (<Profile {...this.props} />) }
      </div>
    );
  }
}

export default EditDrink;