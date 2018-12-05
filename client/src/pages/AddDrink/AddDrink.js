import React, { Component } from "react";
import DrinkForm from "./DrinkForm.js"
// import "./DrinkForm.css";
// import { Collection, CollectionItem } from 'react-materialize';
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";

import Liquors from "./Liquors.js";
import AddLiquor from "./AddLiquor";
import Ingredients from "./Ingredients.js";
import AddIngredient from "./AddIngredient";

class AddDrink extends Component {
    state = {
        // recipe name
        name: "",
        // liquor/liquors needed
        // { id: 1, content: 'gin' },
        // { id: 2, content: 'vadker' }
        liquors: [],
        // ingredients that are not liquors needed
        ingredients: []
    };

    deleteLiquor = (id) => {
        const liquors = this.state.liquors.filter(liquor => {
            // if id is not equal to id return true and do not remove
            // if id is equal to id return false and remove from array
            return liquor.id !== id
        });
        this.setState({
            //es6 shortening if key and value have save name
            //otherwise looks like (liquors: liquors)
            liquors
        })
    }

    addLiquor = (liquor) => {
        // should be changed later from Math.random()
        liquor.id = Math.random();
        let liquors = [...this.state.liquors, liquor]
        this.setState({
            //same es6 shortcut from deleteLiquor
            liquors
        })
    }

    deleteIngredient = (id) => {
        const ingredients = this.state.ingredients.filter(ingredient => {
            // if id is not equal to id return true and do not remove
            // if id is equal to id return false and remove from array
            return ingredient.id !== id
        });
        this.setState({
            //es6 shortening if key and value have save name
            //otherwise looks like (liquors: liquors)
            ingredients
        })
    }

    addIngredient = (ingredient) => {
        // should be changed later from Math.random()
        ingredient.id = Math.random();
        let ingredients = [...this.state.ingredients, ingredient]
        this.setState({
            //same es6 shortcut from deleteLiquor
            ingredients
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSaveDrink = event => {
        console.log("handleSaveDrink");
        const inputLiquor = [{ name: this.state.liquor1, volume: 2 }, { name: this.state.liquor2, volume: 3 }];
        event.preventDefault();
        API.saveDrink({
            name: this.state.name,
            liquors: this.state.liquor1,
            mixers: "tonic",
            garnish: "olive",
            // liquors: inputLiquor,
            // mixers: [],
            // garnish: [],
            glassType: "coupe",
            prep: "Shaken not stirred",
            cost: 5,
            price: 0
        })
            .catch(err => console.log(err));
        // may need to make this.setState a .then
        this.setState({ name: "", liquor1: "", liquor2: "" })
    };

    render() {

        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <NavTabs {...this.props} />
                <div>
                    <DrinkForm
                        name={this.state.name}
                        liquor1={this.state.liquor1}
                        liquor2={this.state.liquor2}
                        handleSaveDrink={this.handleSaveDrink}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <AddLiquor
                        addLiquor={this.addLiquor}
                    />
                </div>
                <div>
                    <AddIngredient
                        addIngredient={this.addIngredient}
                    />
                </div>
                <div className="liquor-app container">
                    <h1 className="center blue-text">liqqa</h1>
                    <Liquors
                        liquors={this.state.liquors}
                        deleteLiquor={this.deleteLiquor}
                    />
                </div>
                <div className="ingredient-app container">
                    <h1 className="center blue-text">the 'greeds</h1>
                    <Ingredients
                        ingredients={this.state.ingredients}
                        deleteIngredient={this.deleteIngredient}
                    />
                </div>
            </div>
        );
    }
};

export default AddDrink;
