import React from "react";

import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import FilterPage from './FilterPage'
import Profile from "./Profile";

import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import '../dashboard.css'

const App = () => {

  return (
          <Router> 
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard}/>
                <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                <PrivateRoute exact path="/filter" component={FilterPage}/>
                <PrivateRoute exact path="/profile" component={Profile}/>

                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
  );
};

export default App;