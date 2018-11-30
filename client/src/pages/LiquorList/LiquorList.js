import React from "react";
import "./LiquorList.css";
import {Collection, CollectionItem} from 'react-materialize';
import NavTabs from "../../NavTabs/NavTabs"

const LiquorList = props => (
    <div>
        <NavTabs {...props} />
            <div class="container">
                <Collection>
                    <CollectionItem href='#'>Old Overholt</CollectionItem>
                    <CollectionItem href='#'>Hendrix</CollectionItem>
                    <CollectionItem href='#'>North Shore Gin #6</CollectionItem>
                    <CollectionItem href='#'>Tattersall Aquavit</CollectionItem>
                </Collection>
            </div>
    </div>   
    
    )





export default LiquorList;