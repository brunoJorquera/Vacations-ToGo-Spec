import React, { useState } from "react";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";

import vtg from "../images/vtg-logo.svg";

export default function UpdateProfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // current user
  const user = firebase.auth().currentUser;

  // add picks to user collection in firestore
  const updateProfile = () => {
    const userUID = user.uid;
    let db = firebase.firestore();
    db.collection("user").doc(userUID).update({
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });
    history.push("/");
  };
  return (
    <div className="dash">
      <img className="vtg-open w-100 mb-4" src={vtg} alt="logo" />
      <div className="card">
        <form className="form">
          <h1> Update Profile</h1>

          <input
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            placeholder="Last Name"
          />

          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="New Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            placeholder="New Password"
          />
          <button type="submit" onClick={updateProfile}>
            {" "}
            Save Changes{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

  let newUser = auth.createUserWithEmailAndPassword(email, password);
    newUser.then(function () {
      let userUID = auth.currentUser.uid
      let db = firebase.firestore();

      db.collection('user').doc(userUID).set({
        email: email,
        username: null,
      })
    })

