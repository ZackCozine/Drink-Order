import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button, Footer } from 'react-materialize'

export default class NavTabs extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }


    render() {
        
        const { isAuthenticated } = this.props.auth;

        return (

            <Footer copyrights="&copy 2015 Copyright Text">
            
          </Footer>
}

