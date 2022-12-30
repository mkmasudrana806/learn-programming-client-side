import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {
    return (
        <div className="form-width">
        <h5 className="login">Sign Up</h5>
        <Form className="mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms & Condition" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" size="md">
              Sign Up
            </Button>
          </div>
        </Form>
        <p className="mt-2">
          Already Have An Account? <Link to="/login">Log In</Link>
        </p>
      </div>
    );
};

export default Register;