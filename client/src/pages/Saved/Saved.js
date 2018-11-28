import React, { Component } from "react";
import SavedList from "./SavedList.js";
import SavedHeader from "./SavedHeader.js";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  // When pages is displayed, loadBooks is called
  componentDidMount() {
    this.loadBooks();
  }

  // Loads saved books from mongo database
  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data});
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
        <SavedHeader/>
        <SavedList 
          books={this.state.books}
          handleDeleteBook={this.handleDeleteBook}
        />
      </div>
    );
  }
}

export default Saved;