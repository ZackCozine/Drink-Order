import React from "react";
import "./DrinkForm.css";
import { Button, Input, Row, } from 'react-materialize';
// import AddLiquor from "./AddLiquor";
import AddLiquor from "./AddDrink";


const DrinkForm = props => (
    <form className="container center">
        <img className="responsive-img" alt="Drink Order" src="../../drinkorderlogo.png" />
        <Row>
            <h1>Create a Drink</h1>
            <Input
                s={12}
                label="Name"
                onChange={props.handleInputChange}
                value={props.name}
                name="name"
                type="text"
                className="form-control"
                id="AddDrink"
            />
        </Row>

        <div>
            <AddLiquor s={12}
                // drinkLiquors={props.drinkLiquors}
            />
        </div>

        <Row>
            <Button
                waves='light'
                onClick={props.handleSaveDrink}
                className="saveDrinkButton">
                Submit
            </Button>
        </Row>
    </form>
);

export default DrinkForm;