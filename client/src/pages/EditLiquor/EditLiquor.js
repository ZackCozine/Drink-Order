import React, { Component } from "react";
import LiquorList from "./LiquorList.js";
import LiquorHeader from "./LiquorHeader.js";
import API from "../../utils/API";

class EditLiquor extends Component {
  state = {
    Liquor: []
  };

  // When pages is displayed, loadBooks is called
  componentDidMount() {
    this.loadLiquor();
  }

  // Loads saved books from mongo database
  loadLiquor = () => {
    API.getLiquor()
      .then(res => {
        this.setState({ Liquor: res.data});
        console.log("Liquor: ", this.state.Liquor);
      })
      .catch(err => console.log(err));
    
  };

  // Grabs the id of the chosen book from the button name and deletes it from the mongo database
  handleDeleteBook = event => {
    const id = event.target.name;
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
    this.loadBooks();
  };

  render() {
    return (
      <div>
        <LiquorHeader/>
        <LiquorList 
          Liquor={this.state.Liquor}
        //   handleDeleteBook={this.handleDeleteBook}
        />
      </div>
    );
  }
}

export default EditLiquor;