import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import SearchList from "./SearchList.js";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
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

  // Grabs the results array index from the button name and saves the book in the mongo database
  handleSaveBook = event => {
    event.preventDefault();
    const i = event.target.name;
    API.saveBook({
      title: this.state.results[i].volumeInfo.title,
      authors: this.state.results[i].volumeInfo.authors[0],
      description: this.state.results[i].volumeInfo.description,
      image: this.state.results[i].volumeInfo.imageLinks ? this.state.results[i].volumeInfo.imageLinks.smallThumbnail: null,
      link: this.state.results[i].volumeInfo.infoLink
    })
      .catch(err => console.log(err));
    
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchList 
          results={this.state.results}
          handleSaveBook={this.handleSaveBook}
        />
      </div>
    );
  }
}

export default Search;
