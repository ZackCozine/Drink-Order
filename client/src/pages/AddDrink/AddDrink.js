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
        liquors: "",
        // ingredients that are not liquors needed
        ingredients: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSaveDrink = event => {
        console.log("handleSaveDrink");
        event.preventDefault();
        API.saveRecipe({
            name: this.state.name,
            liquors: this.state.liquors,
            ingredients: this.state.ingredients
        })
            .catch(err => console.log(err));
        // may need to make this.setState a .then
        this.setState({ name: "", liquors: "", ingredients: "" })
    };

    render() {

        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <NavTabs {...this.props} />
                <div>
                    <DrinkForm
                        name={this.state.name}
                        liquors={this.state.liquors}
                        ingredients={this.state.ingredients}
                        handleSaveDrink={this.handleSaveDrink}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
            </div>
        );
    }
};

export default AddDrink;

// previously populating our drinks page

// const DrinkList = props => (
//     <div>
//         <NavTabs {...props} />

//         <div class="container">
//             <Collection>
//                 <CollectionItem href='#'>Sazerac</CollectionItem>
//                 <CollectionItem href='#'>Manhattan</CollectionItem>
//                 <CollectionItem href='#'>Old Fashioned</CollectionItem>
//                 <CollectionItem href='#'>Negroni</CollectionItem>
//             </Collection>
//         </div>

//     </div>


// )




// export default DrinkList;