// import React from "react";
// import "./DrinkList.css";
// import {Table, Button, Modal, Row, Input, Icon} from 'react-materialize';

// const DrinkList = props => (
//         <div className="container drinkTable">
//             <Table striped={false} bordered={false}>
//                 <thead>
//                     <tr>
//                         <th data-field="name" className="tableIndent">Name</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.Drinks.map((Liquor, index) => (
//                         <tr key={Liquor._id}>
//                             <td className="tableIndent">{Drink.name}</td>
//                             {/* <td>{Liquor.type}</td>
//                             <td>{Liquor.bottleVolume}</td>
//                             <td>{Liquor.bottleCost}</td>
//                             <td className="editButton"> */}
//                                 <Modal
//                                     header='Edit Liquor'
//                                     trigger={<Button floating className="light-green"><i className="material-icons">
//                                     create
//                                     </i></Button>}>
                                    
//                                     <Row>
//                                         <Input s={12}
//                                             label= "Name"
//                                             onChange={props.handleInputChange}
//                                             defaultValue={Liquor.name}
//                                             name="name"
//                                             type="text"
//                                             className="form-control"
//                                             id="updateLiquor"
//                                         />
                                       
//                                     </Row>
//                                     <Row>
//                                         <Button waves='light'
//                                             onClick={props.handleUpdateLiquor}
//                                             className="updateButton modal-close" id={Liquor._id} name={index}>
//                                             Submit
//                                         </Button>
//                                     </Row>
//                                 </Modal>
//                             </td>
//                             <td className="deleteButton">
//                                 <Button floating className="red" onClick={props.handleDeleteLiquor}
//                                  id={Liquor._id}> 
//                                  X
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     )

// export default LiquorList;