import React, { Component } from "react";
import "./DrinkHeader.css";
import {Button, Icon} from 'react-materialize'

// Header for the Edit Drink page
const DrinkHeader = () => (
    <div className="DrinkHeader">
    <Button floating large className='light-green' icon="add" node='a' href='/AddDrink'></Button><h4>Add a Drink</h4>
    </div>
    // (<h5 className="DrinkHeader">Drink</h5>

);

export default DrinkHeader;