import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "@firebase/auth";

const Login = () => {
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  // handle to user log in email with password
  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  // handle to google sign in
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  //handle to github sign in
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-width">
      <Form onSubmit={handleSignInUser} className="mx-auto">
        <h5 className="login">Log In</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
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
        <h6 className="text-primary">Forgot Password?</h6>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            required
            label="Accept Terms & Conditions"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="md" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
      <p className="mt-2">
        Don't Have An Account? <Link to="/register">Create New Account</Link>
      </p>
      <p className="or">Or</p>
      <div className="d-grid gap-2">
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-success"
          size="md"
        >
          <FaGoogle></FaGoogle> Sign in with Google
        </Button>
        <Button
          onClick={handleGithubSignIn}
          variant="outline-success"
          size="md"
        >
          <FaGithub></FaGithub> Sign in with GitHub
        </Button>
      </div>
    </div>
  );
};

export default Login;
