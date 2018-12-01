import React from "react";
import "./LiquorList.css";
import {Collection, CollectionItem} from 'react-materialize';

const LiquorList = props => (
        <div class="container">
            <Collection>
                {props.Liquor.map(Liquor => (
                    <CollectionItem href='#'>{Liquor.name}  {Liquor.type}</CollectionItem>
                ))}
            </Collection>
        </div>

        
    
    )





export default LiquorList;