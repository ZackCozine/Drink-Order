import React, { Component } from "react";
import RecipeForm from "./RecipeForm.js"
// import "./RecipeEdit.css";
// import { } from 'react-materialize';
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";

class RecipeEdit extends Component {
    state = {
        name: "",
        liquor: "",
        ingredients: ""
    };

    // componentDidMount() {
    //     this.loadRecipes();
    // }


    loadRecipes = () => {
        API.getRecipes()
            .then(res =>
                this.setState({ name: "", liquor: "", ingredients: "" })
            )
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSaveRecipe = event => {
        event.preventDefault();
        if (this.state.name && this.state.liquor && this.state.ingredients) {
            console.log("handleSaveRecipe")
            event.preventDefault();
            API.saveRecipe({
                name: this.state.name,
                liquor: this.state.liquor,
                ingredients: this.state.ingredients
            })
                .catch(err => console.log(err))
                .then(this.setState({ name: "", liquor: "", ingredients: "" }))
            // .then(res => this.loadRecipes())
        }
    };

    render() {

        const { isAuthentcated } = this.props.auth;

        return (

            <div>
                <NavTabs {...this.props} />
                <div>
                    <RecipeForm
                        name={this.state.name}
                        liquor={this.state.liquor}
                        ingredients={this.state.ingredients}
                        handleFormSubmit={this.handleSaveRecipe}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
            </div>
        );
    }

}





export default RecipeEdit;