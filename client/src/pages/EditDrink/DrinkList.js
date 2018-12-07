import React from "react";
import "./DrinkList.css";
import {Table, Button, Modal, Row, Input, Icon} from 'react-materialize';

const DrinkList = props => (
        <div className="container DrinkTable">
            <Table striped={false} bordered={false}>
                <thead>
                    <tr>
                        <th data-field="name" className="tableIndent">Name</th>
                        <th data-field="type">Type</th>
                        <th data-field="volume">Volume</th>
                        <th data-field="cost">Cost</th>
                        <th data-field="edit"></th>
                        <th data-field="delete"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.Drink.map((Drink, index) => (
                        <tr key={Drink._id}>
                            <td className="tableIndent">{Drink.name}</td>
                            <td>{Drink.type}</td>
                            <td>{Drink.bottleVolume}</td>
                            <td>{Drink.bottleCost}</td>     
                            {/* <td>{Drink.userID}</td> */}
                            <td className="editButton">
                                <Modal
                                    header='Edit Drink'
                                    trigger={<Button floating className="light-green"><i className="material-icons">
                                    create
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
                                        <Input s={12} 
                                            label= "Type of Drink" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Drink.type}
                                            name="type"
                                            type="text"
                                            className="form-control"
                                            id="updateDrink"
                                        />
                                        <Input s={12} 
                                            label= "Bottle Volume (size)" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Drink.bottleVolume}
                                            name="bottleVolume"
                                            type="text"
                                            className="form-control"
                                            id="updateDrink"
                                        />
                                        <Input s={12} label= 
                                            "Bottle Cost" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Drink.bottleCost}
                                            name="bottleCost"
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
                            </td>
                            <td className="deleteButton">
                                <Button floating className="red" onClick={props.handleDeleteDrink}
                                 id={Drink._id} name={index}>
                                <i className="material-icons">clear</i>
                                 
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

export default DrinkList;