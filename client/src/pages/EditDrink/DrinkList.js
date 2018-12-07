import React from "react";
import "./DrinkList.css";
import {Table, Button, Modal, Row, Input, Icon} from 'react-materialize';

const DrinkList = props => (
        <div className="container DrinkTable">
            <Table striped={false} bordered={false}>
                <thead>
                    <tr>
                        <th data-field="name" className="tableIndent">Name</th>
                        <th data-field="edit"></th>
                        <th data-field="delete"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.Drink.map((Drink, index) => (
                        <tr key={Drink._id}>
                            <td className="tableIndent">{Drink.name}</td>
                            <td className="editButton">
                            <Modal
                                    header='Edit Drink'
                                    trigger={<Button floating className="light-green"><i className="material-icons">
                                    list
                                    </i></Button>}>
                                    
                                    <Row>
                                        <Input s={12}
                                            label= "Name"
                                            onChange={props.handleInputChange}
                                            defaultValue={Drink.name}
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            id="updateDrink"
                                        />
                                    </Row>
                                    
                                    {props.Drink[index].liquors.map((liquor) => (
                                        <Row>
                                            <Input s={6} 
                                                label= "Ingredients" 
                                                onChange={props.handleInputChange}
                                                defaultValue={liquor.name}
                                                name="ingredients"
                                                type="text"
                                                className="form-control"
                                                id="updateDrink"
                                            />
                                            <Input
                                                s={3}
                                                label="Ounces"
                                                onChange={this.handleInputChange}
                                                defaultValue={liquor.volume}
                                                name="volume"
                                                type="number"
                                                className="form-control"
                                                id="AddDrink"
                                            />
                                            <Button
                                                s={2}
                                                floating large
                                                className="red"
                                                onClick={this.addDrinkLiquor}
                                                className="saveLiquorButton">
                                                +
                                            </Button>
                                        </Row>
                                    ))}
                                  
                                    <Row>
                                        <Input s={12} 
                                            label= "Preparation" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Drink.prep}
                                            name="preparation"
                                            type="text"
                                            className="form-control"
                                            id="updateDrink"
                                        />
                                    </Row>
                                    <Row>
                                        <Input s={12} label= 
                                            "Cost" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Drink.cost}
                                            name="cost"
                                            type="text"
                                            className="form-control"
                                            id="updateDrink"
                                        />
                                    </Row>
                                    <Row>
                                        <Input s={12} label= 
                                            "Price" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Drink.price}
                                            name="price"
                                            type="text"
                                            className="form-control"
                                            id="updateDrink"
                                        />
                                    </Row>
                                    <Row>
                                        <Button waves='light'
                                            onClick={props.handleUpdateDrink}
                                            className="updateButton modal-close" id={Drink._id} name={index}>
                                            Submit
                                        </Button>
                                    </Row>
                                </Modal>



Collapse 

                            </td>
                            <td className="deleteButton">
                                <Button floating className="red" onClick={props.handleDeleteDrink}
                                 id={Drink._id} name={index}>X
                                
                                 
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

export default DrinkList;