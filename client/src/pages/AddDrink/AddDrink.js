import React, { Component } from 'react';
import { Button, Input, Row } from 'react-materialize';
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";
import Liquors from "./Liquors.js";
import "./DrinkForm.css";
import Footer from "../../Footer/Footer";

class AddDrink extends Component {
    state = {
        content: "",
        allLiquors: [],
        drinkLiquors: [],
        selected: "",
        name: "",
        liquorVolume: "",
    }

    // When page is displayed, loadLiquor is called
    componentDidMount() {
        this.loadLiquor();
    }

    // Loads saved liquor from mongo database
    loadLiquor = () => {
        API.getLiquor()
            .then(res => {
                this.setState({ allLiquors: res.data });
            })
            .catch(err => console.log(err));
    };

    changeSelected = event => {
        console.log('changeSelected: ', event.target.selectedIndex);
        this.setState({ selected: event.target.selectedIndex })
    }

    addDrinkLiquor = (event) => {
        event.preventDefault();
        const liquorIndex = this.state.selected-1; 
        console.log("this.state.selected: ", this.state.selected);
        console.log('addDrinkLiquor: ', liquorIndex);
        console.log('liquorVolume: ', this.state.liquorVolume);
        if (liquorIndex >= 0) {

            const newLiquor = this.state.allLiquors[liquorIndex].name;
            let updated = this.state.drinkLiquors.slice();
            updated.push({ name: newLiquor, volume: this.state.liquorVolume });
            this.setState({ drinkLiquors: updated });
            // this.setState({drinkLiquors: [...this.state.drinkLiquors, newLiquor]});
            console.log(newLiquor, this.state.drinkLiquors);
            // this.setState({ liquorVolume: 0});
            // this.setState({ liquorVolume: 1 })
        }
        console.log("Liquor Volume: " + this.state.liquorVolume)
        this.setState({
            liquorVolume: "",
            selected: ""
        })
        
    }

    deleteDrinkLiquor = (id) => {
        const drinkLiquors = this.state.drinkLiquors.filter(liquor => {
            // if id is not equal to id return true and do not remove
            // if id is equal to id return false and remove from array
            return liquor.id !== id
        });
        this.setState({
            drinkLiquors:
                //es6 shortening if key and value have save name
                //otherwise looks like (liquors: liquors)
                drinkLiquors
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.name);
        console.log(this.state.liquorVolume);
    };

    handleSaveDrink = event => {
        event.preventDefault();
        console.log("handleSaveDrink");
        console.log(this.state.drinkLiquors);
        // let formattedLiquor = [];
        // for (let i = 0; i < this.state.drinkLiquors.length; i++) {
        //     formattedLiquor.push({name: this.state.drinkLiquors[i].name, volume: 2});
        // }
        API.saveDrink({
            name: this.state.name,
            liquors: this.state.drinkLiquors,
            // liquors: formattedLiquor,
            // mixers: "tonic",
            // garnish: "olive",
            // liquors: inputLiquor,
            // mixers: [],
            // garnish: [],
            // glassType: "coupe",
            prep: this.state.prep,
            cost: 5,
            price: 0
        })
            .catch(err => console.log(err)).then(
        // may need to make this.setState a .then
       
        this.setState({
            content: "",
          
            drinkLiquors: [],
            selected: "",
            name: ""
            
    
    }))
            
            }

    render() {

        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <NavTabs {...this.props} />
                <div>
                    <form className="container center">
                        {/* <img className="responsive-img" alt="Drink Order" src="../../drinkorderlogo.png" /> */}
                        <Row>
                            <h1>Create a Drink</h1>
                            <Input
                                s={12}
                                label="Name"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                                name="name"
                                type="text"
                                className="form-control"
                                id="AddDrink"
                            />
                        </Row>

                        <Row>
                            <Input s={6} type="select" label="Liquor" defaultValue={this.selected}
                            onChange={this.changeSelected}
                            >
                                <option></option>
                                {this.state.allLiquors.map((Liquor, index) => (
                                    <option name={index}>{Liquor.name}</option>
                                ))}
                            </Input>
                       
                            <Input 
                                s={3} 
                                label="Volume"
                                onChange={this.handleInputChange}
                                value={this.state.liquorVolume}
                                name="liquorVolume"
                                type="number"
                                className="form-control"
                                id="AddDrink"
                                />
                            <Button
                                s={2}
                                // disabled={!(this.liquorVolume)}
                                floating large
                                className="red"
                                onClick={this.addDrinkLiquor}
                                className="saveLiquorButton">
                                +
                            </Button>
                        </Row>

                        {/* <Row>
                            <Button
                                // disabled={!(this.liquorVolume)}
                                waves='light'
                                onClick={this.addDrinkLiquor}
                                className="saveLiquorButton">
                                Add Ingredient
                            </Button>
                        </Row> */}

                        <Row> 
                        <div className="container center">
                            <h5 className="center black-text">Ingredients</h5>
                            <Liquors
                                s={12}
                                drinkLiquors = {this.state.drinkLiquors}
                                
                                deleteDrinkLiquor={this.deleteDrinkLiquor}
                            />
                        </div>
                        </Row>
                        <Row>
                        <Input
                                s={12}
                                label="Preparation"
                                onChange={this.handleInputChange}
                                value={this.prep}
                                name="prep"
                                type="text"
                                className="form-control"
                                id="AddDrink"
                            />
                        </Row>

                        <Row>
                            <Button
                                waves='light'
                                onClick={this.handleSaveDrink}
                                className="saveDrinkButton">
                                Submit
                            </Button>
                        </Row>
                    </form>
                </div>
                
            </div>
            
        )
    }
}

export default AddDrink;