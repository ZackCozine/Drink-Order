import React from "react";
import "./SearchForm.css";

// Form for keyword input used in google books search
const SearchForm = props => (
  <form align="center">
    <div className="form-group container">
      <div className="row">
        <div className="col-md-9">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Book"
            id="search"
          />
        </div>
        <div className="col-md-3">
          <button
            onClick={props.handleFormSubmit}
            className="search-button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default SearchForm;
