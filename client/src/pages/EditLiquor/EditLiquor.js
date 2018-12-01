import React, { Component } from "react";
import LiquorList from "./LiquorList.js";
import LiquorHeader from "./LiquorHeader.js";
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";

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

    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <NavTabs {...this.props} />

        <div>
          <LiquorHeader/>
          <LiquorList 
            Liquor={this.state.Liquor}
          //   handleDeleteBook={this.handleDeleteBook}
          />
        </div>
      </div>
    );
  }
}

export default EditLiquor;