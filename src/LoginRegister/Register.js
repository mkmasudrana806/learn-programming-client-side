import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // handle submit or create new user
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        // const user = result.user;
        form.reset();
        setError("");
        // console.log(user);
        handleUpdateUserProfile(name, photoURL);
        handleVerifyEmail();
        toast.success(
          "Sent an email please verify your email(also check spam folder)."
        );
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };
  // update user profile
  const handleUpdateUserProfile = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  // handle terms and conditon
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  // handle to email verification
  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-width">
      <Form className="mx-auto" onSubmit={handleCreateUser}>
        <h5 className="login">Sign Up</h5>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
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
            onClick={handleAccepted}
            required
            label={
              <>
                Accept <Link to="/terms">Terms And Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <div className="d-grid gap-2 mt-2">
          <Button
            variant="primary"
            type="submit"
            size="md"
            disabled={!accepted}
          >
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
