import React from "react";
import "./LiquorList.css";
import {Collection, CollectionItem} from 'react-materialize';

const LiquorList = props => (
        <div class="container">
            <Collection>
                <CollectionItem href='#'>Old Overholt</CollectionItem>
                <CollectionItem href='#'>Hendrix</CollectionItem>
                <CollectionItem href='#'>North Shore Gin #6</CollectionItem>
                <CollectionItem href='#'>Tattersall Aquavit</CollectionItem>
            </Collection>
        </div>
        
    
    )





export default LiquorList;