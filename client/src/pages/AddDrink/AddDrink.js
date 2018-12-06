import React, { Component } from 'react';
import { Button, Input, Row } from 'react-materialize';
import API from "../../utils/API";
import NavTabs from "../../NavTabs/NavTabs";
import Liquors from "./Liquors.js";
import "./AddDrink.css";

class AddDrink extends Component {
    state = {
        content: "",
        allLiquors: [],
        drinkLiquors: [],
        selected: false,
        name: "",
        liquorVolume: null
    }

     // When page is displayed, loadLiquor is called
     componentDidMount() {
        this.loadLiquor();
    }

    // Loads saved liquor from mongo database
    loadLiquor = () => {
        API.getLiquor()
        .then(res => {
            this.setState({ allLiquors: res.data});
        })
        .catch(err => console.log(err));
    };

    changeSelected = event => {
        console.log('changeSelected: ', event.target.selectedIndex);
        this.setState({selected:event.target.selectedIndex})
    }

    addDrinkLiquor = (event) => {
        event.preventDefault();
        const liquorIndex = this.state.selected-1; 
        console.log('addDrinkLiquor: ', liquorIndex);
        console.log('liquorVolume: ', this.state.liquorVolume);
        if (liquorIndex >= 0) {
        
            const newLiquor = this.state.allLiquors[liquorIndex].name;
            let updated = this.state.drinkLiquors.slice();
            updated.push({name:newLiquor, volume:this.state.liquorVolume});
            this.setState({drinkLiquors:updated});
            // this.setState({drinkLiquors: [...this.state.drinkLiquors, newLiquor]});
            console.log(newLiquor, this.state.drinkLiquors);
            // this.setState({ liquorVolume: 0});
            this.setState({ liquorVolume: null })
        }
    }
   
    deleteDrinkLiquor = (id) => {
        const liquors = this.state.drinkLiquors.filter(liquor => {
            // if id is not equal to id return true and do not remove
            // if id is equal to id return false and remove from array
            return liquor.id !== id
        });
        this.setState({drinkLiquors:
            //es6 shortening if key and value have save name
            //otherwise looks like (liquors: liquors)
            liquors
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

        const ml_oz = 0.033814;
        let cost = 0;
        
        const costArray = this.state.drinkLiquors.map(tempDL => {
            const match = this.state.allLiquors.find((tempAL) =>
                tempDL.name == tempAL.name);
                console.log('match: ', match);
                return match.bottleCost / (match.bottleVolume * ml_oz) * tempDL.volume;
        })

        for (let i = 0; i < costArray.length; i++) {
            cost += costArray[i];
        }
        cost = cost.toFixed(2);
        const price = (cost * 5).toFixed(2);

        console.log('costArray: ', costArray);

        // let formattedLiquor = [];
        // for (let i = 0; i < this.state.drinkLiquors.length; i++) {
        //     formattedLiquor.push({name: this.state.drinkLiquors[i].name, volume: 2});
        // }
        API.saveDrink({
            name: this.state.name,
            liquors: this.state.drinkLiquors,
            // liquors: formattedLiquor,
            mixers: "tonic",
            garnish: "olive",
            // liquors: inputLiquor,
            // mixers: [],
            // garnish: [],
            glassType: "coupe",
            prep: "Shaken not stirred",
            cost: cost,
            price: price
        })
            .catch(err => console.log(err));
        // may need to make this.setState a .then
        this.setState({ name: "", drinkLiquors: [], selected: false });
    };

    render() {

        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <NavTabs {...this.props} />
                <div>
                    <form className="container center">
                        <img className="responsive-img" alt="Drink Order" src="../../drinkorderlogo.png" />
                        <Row>
                            <h1>Create a Drink</h1>
                            <Input
                                s={12}
                                label="Name"
                                onChange={this.handleInputChange}
                                value={this.name}
                                name="name"
                                type="text"
                                className="form-control"
                                id="AddDrink"
                            />
                        </Row>
                    
                        <Row>
                            <Input s={6} type="select" label="Liquor" defaultValue=" "
                            onChange={this.changeSelected}
                            >
                                <option></option>
                                {this.state.allLiquors.map((Liquor, index) => (
                                    <option name={index}>{Liquor.name}</option>
                                ))}
                            </Input>
                       
                            <Input 
                                s={6} 
                                label="Volume"
                                onChange={this.handleInputChange}
                                value={this.liquorVolume}
                                name="liquorVolume"
                                type="number"
                                className="form-control"
                                id="AddDrink"
                                />
                        </Row>

                        <Row>
                            <Button
                                // disabled={!(this.liquorVolume)}
                                waves='light'
                                onClick={this.addDrinkLiquor}
                                className="saveLiquorButton">
                                Add Liquor
                            </Button>
                        </Row>

                        <Row className="liquor-app container">
                            <h6 className="center blue-text">Liquors</h6>
                            <Liquors
                                drinkLiquors = {this.state.drinkLiquors}
                                deleteDrinkLiquor={this.deleteDrinkLiquor}
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