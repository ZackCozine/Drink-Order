import axios from "axios";

const BASEURL = "https://www.google.com";

// Export an object with a "search" method that searches the ? API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  // Gets all liquors
  getLiquor: function() {
    return axios.get("/api/liquors");
  },
  // Updates the database with new info for a liquor
  updateLiquor: function(id, LiquorData) {
    return axios.put("/api/liquors/" + id, LiquorData);
  },
  // Deletes the liquor with the given id
  deleteLiquor: function(id) {
    return axios.delete("/api/liquors/" + id);
  },
  // Saves a liquor to the database
  saveLiquor: function(LiquorData) {
    return axios.post("/api/liquors", LiquorData);
  }
};
