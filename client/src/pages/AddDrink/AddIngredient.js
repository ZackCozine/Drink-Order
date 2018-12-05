import React, { Component } from 'react';
import { Button, Input, Row, } from 'react-materialize';

class AddIngredient extends Component {
    state = {
        content: ''
    }
    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addIngredient(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <form className="container center">
                <Row>
                    <label>Add Ingredient</label>
                    <Input
                        s={12}
                        label="Ingredient"
                        onChange={this.handleChange}
                        value={this.state.content}
                        name="ingredient"
                        type="text"
                        className="form-control"
                        id="AddDrink"
                    />
                </Row>
                <Row>
                    <Button
                        waves='light'
                        onClick={this.handleSubmit}
                        className="SaveIngredient-button">
                        Submit
                    </Button>
                </Row>
            </form>
        )
    }
}

export default AddIngredient;