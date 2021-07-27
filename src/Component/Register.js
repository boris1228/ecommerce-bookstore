import React from "react";
import {Container, Form, FormGroup, Button, FormLabel} from 'react-bootstrap';


const Registration = () => {

 
    return (
        <Form className="form-container">
        <h3>Sign Up</h3>

        <FormGroup>
            <FormLabel>First name</FormLabel>
            <input type="text" className="form-control" placeholder="First name" />
        </FormGroup>

        <FormGroup>
            <FormLabel>Last name</FormLabel>
            <input type="text" className="form-control" placeholder="Last name" />
        </FormGroup>

        <FormGroup>
            <FormLabel>Email address</FormLabel>
            <input type="email" className="form-control" placeholder="Enter email" />
        </FormGroup>

        <FormGroup>
            <FormLabel>Password</FormLabel>
            <input type="password" className="form-control" placeholder="Enter password" />
        </FormGroup>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
    </Form>
    );
  };
  
  export default Registration;