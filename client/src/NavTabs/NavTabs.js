import React, { Component } from "react";
import { Navbar, NavItem, Icon } from 'react-materialize'

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

            <div className="nav-wrapper brown darken-3">
                <div className="container">
                    <Navbar brand='drink order' className="navbar brown darken-3" right>
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
                        

                        {
                           isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'AddLiquor')}
                                className="nav-link">Add Liquor</NavItem>
                           )
                        }

                       {
                           isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'EditLiquor')}
                                className="nav-link">Edit Liquor</NavItem>
                           )
                        }

                        {/* Drink list button */}

                        {
                            isAuthenticated() && (
                            <NavItem
                                onClick={this.goTo.bind(this, 'DrinkList')}
                                className="nav-link">Drink List</NavItem>
                            )
                        }
                    </Navbar>
                </div>
            </div>

        )
    }



};
