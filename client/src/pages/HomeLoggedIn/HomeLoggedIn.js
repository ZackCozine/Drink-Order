import React, { Component } from "react";
import "./HomeLoggedIn.css";
import {Button, Icon, Row, Collection, CollectionItem} from 'react-materialize';
import NavTabs from "../../NavTabs/NavTabs"

export default class Home extends Component {
    
    render() {
       
        const { isAuthenticated } = this.props.auth;
        
        return(
           <div>
            <NavTabs {...this.props} />

            <div class="container center">
                <br /><br />
                <img class="responsive-img" src="../../drinkorderlogo.png" />    
                
            
            </div>
        </div>
    
        )
    }
}




