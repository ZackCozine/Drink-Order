import React, { Component } from "react";
import "./HomeLoggedIn.css";
// import { Footer, NavTabs} from 'react-materialize';
import NavTabs from "../../NavTabs/NavTabs"
import Footer from "../../Footer"
import Profile from "../../Profile/Profile"

export default class Home extends Component {
    
    render() {
        const { isAuthenticated } = this.props.auth;
        
        return(
<<<<<<< HEAD

           <div>
            <NavTabs {...this.props} />
            
            { isAuthenticated() && (<Profile {...this.props} />) }
            
=======
           <body>
            <header>   
            <NavTabs {...this.props} />
            </header>
            
            <main>
                
>>>>>>> master
            <div class="container center">
                <br /><br />
                <img class="responsive-img" src="../../drinkorderlogo.png" />
                        
            </div>
            
            </main>
            
            <footer>
            <Footer {...this.props}/>
            </footer>
        </body>
    
        )
    }
}




