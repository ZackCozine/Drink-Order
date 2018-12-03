import React, { Component } from "react";
import AlcoholInputs from "./AlcoholInputs";
import { } from 'react-materialize';
import history from "../../history"
import API from "../../utils/API";
import { Button, Input, Row, MediaBox } from 'react-materialize';
import NavTabs from "../../NavTabs/NavTabs";

class RecipeEdit extends Component {

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
                    <AlcoholInputs alcohols={this.state.alcohols} deleteAlc={this.deleteAlc} />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Add new ingredient: </label>
                        <input type="text" onChange={this.handleChange} value={this.state.content} />
                    </form>
                </div>
            </div>
        );

    }
}






export default RecipeEdit;


// import RecipeForm from "./RecipeForm.js"
// // import "./RecipeEdit.css";
// // import { } from 'react-materialize';



// class RecipeEdit extends Component {
//     state = {
//         name: "",
//         liquor: "",
//         ingredients: ""
//     };

//     // componentDidMount() {
//     //     this.loadRecipes();
//     // }


//     loadRecipes = () => {
//         API.getRecipes()
//             .then(res =>
//                 this.setState({ name: "", liquor: "", ingredients: "" })
//             )
//             .catch(err => console.log(err));
//     }

//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleSaveRecipe = event => {
//         event.preventDefault();
//         if (this.state.name && this.state.liquor && this.state.ingredients) {
//             console.log("handleSaveRecipe")
//             event.preventDefault();
//             API.saveRecipe({
//                 name: this.state.name,
//                 liquor: this.state.liquor,
//                 ingredients: this.state.ingredients
//             })
//                 .catch(err => console.log(err))
//                 .then(this.setState({ name: "", liquor: "", ingredients: "" }))
//             // .then(res => this.loadRecipes())
//         }
//     };

//     render() {

//         const { isAuthentcated } = this.props.auth;

//         return (

//             <div>
//                 <NavTabs {...this.props} />
//                 <div>
//                     <RecipeForm
//                         name={this.state.name}
//                         liquor={this.state.liquor}
//                         ingredients={this.state.ingredients}
//                         handleFormSubmit={this.handleSaveRecipe}
//                         handleInputChange={this.handleInputChange}
//                     />
//                 </div>
//             </div>
//         );
//     }

// }