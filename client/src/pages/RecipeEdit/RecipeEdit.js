import React, { Component } from "react";
import "./RecipeEdit.css";
import AlcoholInputs from "./AlcoholInputs";
import {} from 'react-materialize';

import {Button, Input, Row, MediaBox} from 'react-materialize';

class RecipeEdit extends React.Component{
        
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
    render() {
        return (
            <div>
                <div className="Alcohol container">
                 <h1 className="center blue-text">Alcohols</h1>
                 <AlcoholInputs alcohols={this.state.alcohols} deleteAlc={this.deleteAlc}/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <label>Add new ingredient: </label>
                        <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    </form>
                </div>
            </div>
        );

        }
    }
    





export default RecipeEdit;
   