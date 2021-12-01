import React, { useState } from "react";
import { Button, Alert, DropdownButton } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import vtg from "../images/vtg-logo.svg";

export default function ProfileHeader() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  const { currentUser } = useAuth();

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
        <div className="vtg-container">
          <img className="vtg" src={vtg} alt="Vacations-ToGo" />
        </div>
        <div className="updatediv">
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Link to="/" id="update" className="btn btn-primary m-3">
              Home
            </Link>
            <Link to="/filter" id="update" className="btn btn-primary m-3">
              Search Locations
            </Link>
            <Button
              id="signout"
              className="btn btn-light"
              variant="link"
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </DropdownButton>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
      </div>
    </div>
  );
}
