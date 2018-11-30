import React from "react";
import "./LiquorEdit.css";
import {Button, Input, Row, MediaBox} from 'react-materialize';


const LiquorEdit = props => (
<div class="container center">
<img class="responsive-img" src="../../drinkorderlogo.png" />
<Row>
    <h1>Add Liquor to your Inventory</h1>
    <Input s={12} label= "Name" />
    <Input s={12} label= "Type of Liquor" />
    <Input s={12} label= "Bottle Volume (size)" />
    <Input s={12} label= "Bottle Cost" />
</Row>
<Row>
    <Button waves='light'>Submit</Button>
</Row>
</div>
);

export default LiquorEdit;