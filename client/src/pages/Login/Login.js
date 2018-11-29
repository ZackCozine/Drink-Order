import React from "react";
import "./Login.css";
import {Button, Input, Row, MediaBox} from 'react-materialize';


const Login = props => (
<div class="container center">
<img class="responsive-img" src="../../drinkorderlogo.png" />
<Row>
    <Input s={12} label="First Name" />
    <Input s={12} label="Last Name" />
    <Input s={12} label="username" />
    <Input type="password" label="password" s={12} />
    <Input type="email" label="Email" s={12} />
</Row>
<Row>
    <Button waves='light'>Submit</Button>
</Row>
</div>
);





export default Login;