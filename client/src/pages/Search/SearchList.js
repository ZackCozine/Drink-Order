import React from "react";
import "./SearchList.css";

// List for storing the results of the google books search
const SearchList = props => (
  <ul className="list-group">
    {props.results.map((result, index) =>
      (
      <li className="list-group-item container" key={result.volumeInfo.industryIdentifiers[0].identifier}>
        <div className="row">
          <div className="col-md-3">
            <h5>{result.volumeInfo.title}</h5>
            <p>Written by {result.volumeInfo.authors[0]}</p>
            <img
              alt={result.volumeInfo.title}
              className="img-fluid"
              src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.smallThumbnail : null}
            />
          </div>
          <div className="col-md-9">
            <div className="container">
              <div className="row">
                <div className="col-md-12 result-buttons">
                  <button 
                    onClick={props.handleSaveBook}
                    className="save-button" name={index}
                    >
                    Save
                  </button>
                  <button className="view-button">
                    <a href={result.volumeInfo.infoLink} target="_blank" rel="noopener">View</a>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>{result.volumeInfo.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
    // }
    )}
  </ul>
);

export default SearchList;
