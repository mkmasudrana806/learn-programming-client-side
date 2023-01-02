import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleToSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(photoURLRef.current.value);
  };

  const handleOnChanged = (event) => {
    setName(event.target.value);
  };

  // handle reset password
  return (
    <Form onSubmit={handleToSubmit}>
      <h4 className="mb-4 text-light bg-success p-2">
        User Profle Information.
      </h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          onChange={handleOnChanged}
          type="text"
          defaultValue={name}
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          ref={photoURLRef}
          type="text"
          defaultValue={user?.photoURL}
          placeholder="Photo URL"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update Profile
      </Button>
      <Button variant="primary ms-2">
        <Link to="/resetPassword">Update Password</Link>
      </Button>
    </Form>
  );
};

export default Profile;
