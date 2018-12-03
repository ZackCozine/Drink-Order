import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button} from 'react-materialize'
import "./NavTabs.css";

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
            <div className="navbar-fixed">
                <Navbar brand='drink order' className="navbar brown darken-3 navpad" right>
                    {/* Login or Logout button */}

                    {
                        !isAuthenticated() && (
                            <NavItem
                                id="qsLoginBtn"
                                className='nav-link'
                                onClick={this.login.bind(this)}>
                                Log In
                            </NavItem>
                        )
                    }
                    {
                        isAuthenticated() && (
                            <NavItem
                                id="qsLogoutBtn"
                                className="nav-link"
                                onClick={this.logout.bind(this)}>
                                Logout
                            </NavItem>
                        )
                    }

                    {/* Home button */}
                    <NavItem
                        onClick={this.goTo.bind(this, '')}
                        className="nav-link">Home</NavItem>
                    {/* Liquor list button */}
                    

                    {/* {
                        isAuthenticated() && (
                            <NavItem>
                                <Dropdown trigger={
                                    <NavItem>Liquor</NavItem>
                                    }>
                                    <NavItem
                                        onClick={this.goTo.bind(this, 'AddLiquor')}
                                        className="nav-link">Add
                                    </NavItem>
                                    <NavItem
                                        onClick={this.goTo.bind(this, 'EditLiquor')}
                                        className="nav-link">Edit
                                    </NavItem>
                                </Dropdown>
                            </NavItem>

                        )
                    } */}

                    {
                        isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'AddLiquor')}
                                className="nav-link">Add Liquor
                            </NavItem>
                        )
                    }

                    {
                        isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'EditLiquor')}
                                className="nav-link">Edit Liquor
                            </NavItem>
                        )
                    }

                    {/* Drink list button */}

                    {
                        isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'DrinkList')}
                                className="nav-link drinkIcon">Drink List
                            </NavItem>
                        )
                    }
                </Navbar>
            </div>
        )
    }
};
