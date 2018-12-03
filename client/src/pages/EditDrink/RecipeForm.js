import React from "react";
import "./RecipeEdit.css";
import { Button, Input, Row, MediaBox } from 'react-materialize';


const RecipeForm = props => (
    <form class="container center">
        <img class="responsive-img" src="../../drinkorderlogo.png" />
        <Row>
            <h1>Create a Recipe</h1>
            <Input s={12}
                label="Name"
                onChange={props.handleInputChange}
                value={props.name}
                name="name"
                type="text"
                className="form-control"
                id="RecipeEdit"
            />
            <Input s={12}
                label="Liquor"
                onChange={props.handleInputChange}
                value={props.liquor}
                name="liquor"
                type="text"
                className="form-control"
                id="RecipeEdit"
            />
            <Input s={12}
                label="Ingredients"
                onChange={props.handleInputChange}
                value={props.ingredients}
                name="ingredients"
                type="text"
                className="form-control"
                id="RecipeEdit"
            />
        </Row>
        <Row>
            <Button waves='light' onClick={props.handleSaveRecipe}
                className="SaveLiquor-button">Submit</Button>
        </Row>
    </form>
);

export default RecipeForm;