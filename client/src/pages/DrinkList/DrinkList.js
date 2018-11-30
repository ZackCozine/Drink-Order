import React from "react";
import "./DrinkList.css";
import {Collection, CollectionItem} from 'react-materialize';
import NavTabs from "../../NavTabs/NavTabs";

const DrinkList = props => (
    <div>
        <NavTabs {...this.props} />
    
        <div class="container">
            <Collection>
                <CollectionItem href='#'>Sazerac</CollectionItem>
                <CollectionItem href='#'>Manhattan</CollectionItem>
                <CollectionItem href='#'>Old Fashioned</CollectionItem>
                <CollectionItem href='#'>Negroni</CollectionItem>
            </Collection>
        </div>

    </div>
    

)




export default DrinkList;