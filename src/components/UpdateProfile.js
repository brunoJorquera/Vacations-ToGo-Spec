import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import vtg from '../images/vtg-logo.svg'

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/profile");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container className="logins">
      <div id="center" className="form w-50">
      <img className="vtg-open w-100 mb-4" src={vtg} alt="logo"/>
        <Card className="card">
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email/New Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="password"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="password"
                />
              </Form.Group>
              <Button disabled={loading} id="update-btn" className="w-100 mt-4" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="navbtn w-100 text-center mt-2">
          <Link to="/profile">Cancel</Link>
        </div>
      </div>
    </Container>
  );
}
