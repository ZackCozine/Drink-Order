import React from "react";
import "./DrinkFormHC.css";
import { Button, Input, Row } from 'react-materialize';


const DrinkFormHC = props => (
<form className="container center">
    <Row>
        <h1>Add a new drink!</h1>
        <Input s={12}
            label= "Name"
            onChange={props.handleInputChange}
            value={props.name}
            name="name"
            type="text"
            className="form-control"
            id="AddDrink"
        />
    </Row>
    <Row>    
        <Input s={8} 
            label= "Liquor 1" 
            onChange={props.handleInputChange}
            value={props.liq1}
            name="liq1"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={4} 
            label= "amount" 
            onChange={props.handleInputChange}
            value={props.lv1}
            name="lv1"
            type="text"
            className="form-control"
            id="AddDrink"
        />
    </Row>    
    <Row>
    <Input s={8} 
            label= "Liquor 2" 
            onChange={props.handleInputChange}
            value={props.liq2}
            name="liq2"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={4} 
            label= "amount" 
            onChange={props.handleInputChange}
            value={props.lv2}
            name="lv2"
            type="text"
            className="form-control"
            id="AddDrink"
        />    
    </Row>
    <Row>
    <Input s={8} 
            label= "Liquor 3" 
            onChange={props.handleInputChange}
            value={props.liq3}
            name="liq3"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={4} 
            label= "amount" 
            onChange={props.handleInputChange}
            value={props.lv3}
            name="lv3"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        </Row>
        <Row>
        <Input s={8} 
            label= "Liquor 4" 
            onChange={props.handleInputChange}
            value={props.liq4}
            name="liq4"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={4} 
            label= "amount" 
            onChange={props.handleInputChange}
            value={props.lv4}
            name="lv4"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        </Row>
        <Row>
        <Input s={8} 
            label= "Liquor 5" 
            onChange={props.handleInputChange}
            value={props.liq5}
            name="liq5"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={4} 
            label= "amount" 
            onChange={props.handleInputChange}
            value={props.lv5}
            name="lv5"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        </Row>
        <Row>
        <Input s={8} 
            label= "Mixer" 
            onChange={props.handleInputChange}
            value={props.Mix1}
            name="Mix1"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={4} 
            label= "amount" 
            onChange={props.handleInputChange}
            value={props.Mlv1}
            name="Mlv1"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        </Row>   
        <Row>
        <Input s={8} 
            label= "Mixer" 
            onChange={props.handleInputChange}
            value={props.Mix2}
            name="Mix2"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={4} 
            label= "amount" 
            onChange={props.handleInputChange}
            value={props.Mlv2}
            name="Mlv2"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        </Row>   
        <Row>
        <Input s={6} 
            label= "Glass" 
            onChange={props.handleInputChange}
            value={props.Glass}
            name="Glass"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        <Input s={6} 
            label= "Garnish" 
            onChange={props.handleInputChange}
            value={props.Garnish}
            name="Garnish"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        </Row>  
        <Row>
        <Input s={12} 
            label= "Instructions" 
            onChange={props.handleInputChange}
            value={props.Instructions}
            name="Instructions"
            type="text"
            className="form-control"
            id="AddDrink"
        />
        </Row>                                        
    <Row>
        <Button waves='light'
            // disabled={!(props.name && props.type && props.bottleVolume && props.bottleCost)}
            onClick={props.handleSaveLiquor}
            className="SaveDrink-button">
            Submit
        </Button>
    </Row>
</form>
);

export default DrinkFormHC;