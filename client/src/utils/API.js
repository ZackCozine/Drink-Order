import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const MAX = "&maxResults=10";

// Export an object with a "search" method that searches the google books API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query + MAX);
  },

  // Gets all liquors
  getLiquor: function () {
    return axios.get("/api/drinks");
  },
  // Gets the liquor with the given id
  updateLiquor: function (id, LiquorData) {
    // console.log("updateLiquor");
    return axios.put("/api/drinks/" + id, LiquorData);
  },
  // Deletes the liquor with the given id
  deleteLiquor: function (id) {
    return axios.delete("/api/drinks/" + id);
  },
  // Saves a liquor to the database
  saveLiquor: function (LiquorData) {
    // console.log("LiquorData: ", LiquorData);
    return axios.post("/api/drinks", LiquorData);
  },

  // gets all drinks
  getRecipe: function () {
    return axios.get("/api/recipes");
  },
  // Gets the drink with the given id
  updateRecipe: function (id, DrinkData) {
    // console.log("updateLiquor");
    return axios.put("/api/recipes/" + id, DrinkData);
  },
  // Deletes the drink with the given id
  deleteRecipe: function (id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a drink to the database
  saveRecipe: function (DrinkData) {
    console.log("Recipe Data: ", DrinkData);
    return axios.post("/api/recipes", DrinkData)
  }
};

// google books &key=AIzaSyCIuCsgDPUvNoh2Z3gG-AmYEIcivgQe_eE
