import React, { Component } from 'react';
import { Button, Input, Row, } from 'react-materialize';

class AddLiquor extends Component {
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
        this.props.addLiquor(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <form className="container center">
                <Row>
                    <label>Add Liquor</label>
                    <Input
                        s={12}
                        label="Liquor"
                        onChange={this.handleChange}
                        value={this.state.content}
                        name="liquor"
                        type="text"
                        className="form-control"
                        id="AddDrink"
                    />
                </Row>
                <Row>
                    <Button
                        waves='light'
                        onClick={this.handleSubmit}
                        className="SaveLiquor-button">
                        Submit
                    </Button>
                </Row>
            </form>
        )
    }
}

export default AddLiquor;