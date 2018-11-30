import React, { Component } from "react";
import LiquorForm from "./LiquorForm.js";
// import SearchList from "./SearchList.js";
import API from "../../utils/API";

class AddLiquor extends Component {
  state = {
    name: "",
    type: "",
    bottleVolume: "",
    bottleCost: "",
    results: []
  };

  // Searches for books with the search keywords, sets the results state with the results of the query, and resets the search state
  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items, search: "" }))
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

  // Calls the searchBooks function when the search form is submitted
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  // Grabs the user liqour input from the state saves the liquor in the mongo database
  handleSaveLiquor = event => {
    console.log("handleSaveLiquor");
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
