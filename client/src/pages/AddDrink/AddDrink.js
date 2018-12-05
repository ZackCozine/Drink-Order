import React, { Component } from "react";
import DrinkForm from "./DrinkForm.js"
// import "./DrinkForm.css";
// import { Collection, CollectionItem } from 'react-materialize';
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";

class AddDrink extends Component {
    state = {
        // recipe name
        name: "",
        // liquor/liquors needed
        liquor1: "",
        // ingredients that are not liquors needed
        liquor2: "",

        garnish: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSaveDrink = event => {
        console.log("handleSaveDrink");
        // const inputLiquor = [{name: this.state.liquor1}, {name: this.state.liquor2}];
        event.preventDefault();
        API.saveDrink({
            name: this.state.name,
            liquor1: this.state.liquor1,
            liquor2: this.state.liquor2,
            // mixers: "tonic",
            garnish: this.state.garnish,
            // liquors: inputLiquor,
            // mixers: [],
            // granish: [],
            // glassType: "coupe",
            // prep: "Shaken not stirred",
            // cost: 5,
            // price: 0
        })
            .catch(err => console.log(err));
        // may need to make this.setState a .then
        this.setState({ name: "", liquor1: "", liquor2: "", garnish: "" })
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
                        garnish={this.state.garnish}
                        handleSaveDrink={this.handleSaveDrink}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
            </div>
        );
    }
};

export default AddDrink;
