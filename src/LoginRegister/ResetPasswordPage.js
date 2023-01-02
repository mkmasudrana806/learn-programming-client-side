import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AuthContext } from "../ContextProvider/ContextProvider";

const ResetPasswordPage = () => {
  const [error, setError] = useState("");
  const { resetPassword } = useContext(AuthContext);
  // handle to reset password
  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email !== null) {
      resetPassword(email)
        .then((result) => {
          toast.success("A Reset Email has been sent to you.");
          event.target.reset();
        })
        .catch((error) => setError(error.message));
    } else {
      setError("Please provide correct information");
    }
  };
  return (
    <Form onSubmit={handleResetPassword}>
      <h4 className="mb-4 text-light bg-success p-2">
        Reset Your Password Simply.Please Provide us valid Information
      </h4>
      <div className="form-width">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Reset Password" required />
        </Form.Group>

        <Form.Text className="text-danger d-block mb-2">{error}</Form.Text>

        <Button variant="primary" type="submit">
          Reset Email
        </Button>
      </div>
    </Form>
  );
};

export default ResetPasswordPage;
