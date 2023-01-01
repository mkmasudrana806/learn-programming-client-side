import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  // handle submit or create new user
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password, event.target);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-width">
      <Form className="mx-auto" onSubmit={handleCreateUser}>
        <h5 className="login">Sign Up</h5>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photourl"
            placeholder="Your Photo URL"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            required
            label="Accept Terms & Conditions"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="md">
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
