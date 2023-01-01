import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "@firebase/auth";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // handle to user log in email with password
  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Please verified your email (also check your spam folder)"
          );
        }
      })
      .catch((error) => setError(error.message));
  };

  // handle to google sign in
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };

  //handle to github sign in
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
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
        <Form.Text className="text-danger mb-2">{error}</Form.Text>
        <div className="d-grid gap-2">
          <Button className="mt-2" variant="primary" size="md" type="submit">
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
