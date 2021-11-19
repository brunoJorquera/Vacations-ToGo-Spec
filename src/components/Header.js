import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import vtg from "../images/vtg-logo.svg";

export default function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <div className="header">
        <img className="vtg" src={vtg} alt="Vacations-ToGo" />
        
        <div className="updatediv">
          <strong>Email: {currentUser.email}</strong>
          <Link to="/update-profile" className="btn btn-primary m-3">
            Update profile
          </Link>
          <Button
            className="btn btn-light"
            variant="link"
            onClick={handleLogout}
          >
            Sign out
          </Button>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
      </div>
    </div>
  );
}
