import React from "react";
import "./LiquorList.css";
import {Table, Button, Modal, Row, Input, Icon} from 'react-materialize';

const LiquorList = props => (
        <div className="container liquorTable">
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
                    {props.Liquor.map((Liquor, index) => (
                        <tr key={Liquor._id}>
                            <td className="tableIndent">{Liquor.name}</td>
                            <td>{Liquor.type}</td>
                            <td>{Liquor.bottleVolume}</td>
                            <td>{Liquor.bottleCost}</td>
                            <td className="editButton">
                                <Modal
                                    header='Edit Liquor'
                                    trigger={<Button floating className="light-green"><i className="material-icons">
                                    create
                                    </i></Button>}>
                                    
                                    <Row>
                                        <Input s={12}
                                            label= "Name"
                                            onChange={props.handleInputChange}
                                            defaultValue={Liquor.name}
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            id="updateLiquor"
                                        />
                                        <Input s={12} 
                                            label= "Type of Liquor" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Liquor.type}
                                            name="type"
                                            type="text"
                                            className="form-control"
                                            id="updateLiquor"
                                        />
                                        <Input s={12} 
                                            label= "Bottle Volume (size)" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Liquor.bottleVolume}
                                            name="bottleVolume"
                                            type="text"
                                            className="form-control"
                                            id="updateLiquor"
                                        />
                                        <Input s={12} label= 
                                            "Bottle Cost" 
                                            onChange={props.handleInputChange}
                                            defaultValue={Liquor.bottleCost}
                                            name="bottleCost"
                                            type="text"
                                            className="form-control"
                                            id="updateLiquor"
                                        />
                                    </Row>
                                    <Row>
                                        <Button waves='light'
                                            onClick={props.handleUpdateLiquor}
                                            className="updateButton modal-close" id={Liquor._id} name={index}>
                                            Submit
                                        </Button>
                                    </Row>
                                </Modal>
                            </td>
                            <td className="deleteButton">
                                <Button floating className="red" onClick={props.handleDeleteLiquor}
                                 id={Liquor._id}> 
                                 <i className="material-icons">clear</i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

export default LiquorList;