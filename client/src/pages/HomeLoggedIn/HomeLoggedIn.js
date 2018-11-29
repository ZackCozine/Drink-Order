import React from "react";
import "./HomeLoggedIn.css";
import {Button, Icon, Row, Collection, CollectionItem} from 'react-materialize';

const Home = props => (
    
    <div class="container center">
        <img class="responsive-img" src="../../drinkorderlogo.png" />    
        <Collection>
            <CollectionItem href='#'>MAKE A DRINK</CollectionItem>
            <CollectionItem href='#'>LIQUOR LIST</CollectionItem>
            <CollectionItem href='#'>DRINK LIST</CollectionItem>
            <CollectionItem href='#'>LOGOUT</CollectionItem>
        </Collection>

         <Row>
            
            <Button large waves='light'>MAKE A DRINK</Button>
        </Row>
        <Row>
            <Button large waves='light'>LIQUOR LIST</Button>
        </Row>
        <Row>
            <Button large waves='light'>DRINK LIST</Button>
        </Row>
        <Row>
            <Button large waves='light'>LOGOUT</Button>
        </Row>
    </div>

)





export default Home;