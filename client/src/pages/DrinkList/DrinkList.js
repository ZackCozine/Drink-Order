import React from "react";
import "./DrinkList.css";
import {Collection, CollectionItem} from 'react-materialize';


const DrinkList = props => (
    <div class="container">
        <Collection>
            <CollectionItem href='#'>Sazerac</CollectionItem>
            <CollectionItem href='#'>Manhattan</CollectionItem>
            <CollectionItem href='#'>Old Fashioned</CollectionItem>
            <CollectionItem href='#'>Negroni</CollectionItem>
        </Collection>
    </div>
    

)




export default DrinkList;