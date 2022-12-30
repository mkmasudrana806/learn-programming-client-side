import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
     <div className="form-width">
      <h5 className="login">Log In</h5>
      <Form className="mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <h6 className="text-primary">Forgot Password?</h6>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Terms & Condition" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </div>
      </Form>
      <p className="mt-2">
        Don't Have An Account? <Link to="/register">Create New Account</Link>
      </p>
      <p className="or">Or</p>
      <div className="d-grid gap-2">
        <Button variant="outline-success" size="md">
          <FaGoogle></FaGoogle> Sign in with Google
        </Button>
        <Button variant="outline-success" size="md">
          <FaGithub></FaGithub> Sign in with GitHub
        </Button>
      </div>
    </div>
  );
};

export default Login;
