import React from "react";
import "./DrinkForm.css";
import { Button, Input, Row, } from 'react-materialize';


const DrinkForm = props => (
    <form className="container center">
        <img className="responsive-img" alt="Drink Order" src="../../drinkorderlogo.png" />
        <Row>
            <h1>Create a Drink</h1>
            <Input s={12}
                label="Name"
                onChange={props.handleInputChange}
                value={props.name}
                name="name"
                type="text"
                className="form-control"
                id="AddDrink"
            />
            <Input s={12}
                label="Liquors"
                onChange={props.handleInputChange}
                value={props.liquors}
                name="liquors"
                type="text"
                className="form-control"
                id="AddDrink"
            />
            <Input s={12}
                label="Ingredients"
                onChange={props.handleInputChange}
                value={props.ingredients}
                name="ingredients"
                type="text"
                className="form-control"
                id="AddDrink"
            />
        </Row>
        <Row>
            <Button
                waves='light'
                disabled={!(props.name && props.liquors && props.ingredients)}
                onClick={props.handleSaveDrink}
                className="SaveLiquor-button">
                Submit
            </Button>
        </Row>
    </form>
);

export default DrinkForm;