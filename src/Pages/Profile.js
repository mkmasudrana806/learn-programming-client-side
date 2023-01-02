import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);

  // handle user update profile
  const handleToSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.name.value;
    const photoURL = form.photourl.value;
    const profile = {
      displayName: fullName,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        setName(fullName);
      })
      .catch((error) => console.error(error));
  };

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
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Your Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          name="photourl"
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
