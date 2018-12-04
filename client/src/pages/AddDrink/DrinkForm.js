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
                label="Liquor1"
                onChange={props.handleInputChange}
                value={props.liquor1}
                name="liquor1"
                type="text"
                className="form-control"
                id="AddDrink"
            />
            <Input s={12}
                label="Liquor2"
                onChange={props.handleInputChange}
                value={props.liquor2}
                name="liquor2"
                type="text"
                className="form-control"
                id="AddDrink"
            />
        </Row>
        <Row>
            <Button
                waves='light'
                // disabled={!(props.name && props.liquors && props.ingredients)}
                onClick={props.handleSaveDrink}
                className="SaveLiquor-button">
                Submit
            </Button>
        </Row>
    </form>
);

export default DrinkForm;