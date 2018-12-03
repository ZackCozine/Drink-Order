import React, { Component } from "react";
import "./RecipeEdit.css";
import AddDrink from "./AddDrink";
import {} from 'react-materialize';
import history from "../../history"
import auth0 from 'auth0-js';
import AUTH_CONFIG from "../../Auth/auth0-vars";
import {Button, Input, Row, MediaBox, Select} from 'react-materialize';

class EditDrink extends React.Component{
        
    state = {
        alcohols: [
            // {id: 1, content: 'gin'},
            // {id: 2, content: 'tonic'}
        ]
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.addAlc(this.state);
        this.setState({
            content: ''
        })
    }
    deleteAlc = (id) => {
        const alcohols = this.state.alcohols.filter(alcohol => {
            return alcohol.id !== id
        });
        this.setState({
            alcohols
        })
    }
    addAlc = (alcohol) => {
        alcohol.id = Math.random();
        let alcohols = [...this.state.alcohols, alcohol];
        this.setState({
            alcohols
        })
    }
    //Trying to save the recipe to the database.
    // saveRecipe = (e) => {
    //     e.preventDefault();
    //     let recipeData = this.state.alcohols;
    
    //     App.post("/EditDrink", (req,res) => {
    //         recipeData.save()
    //         .then(item => {
    //             res.send("Recipe saved to database.");
    //         })
    //         .catch(err => {
    //             res.status(400).send("Unable to save.");
    //         });
    //     });
    //   }   
    render() {
        return (
            <div>
                <div className="Alcohol container">
                 <h1 className="center blue-text">Alcohols</h1>
                 <AddDrink alcohols={this.state.alcohols} deleteAlc={this.deleteAlc}/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Add new ingredient: </label>
                        <input type="text" onChange={this.handleChange} value={this.state.content}/>
                        <button onClick={this.handleSubmit} value={this.state.content}>Add Ingredient</button>
                    </form>
                    <button onClick={this.saveRecipe} value={this.state.content}>Save Recipe</button>
                </div>
            </div>
        );
         }
    }
    





export default EditDrink;
   