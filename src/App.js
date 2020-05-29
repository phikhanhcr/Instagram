import React, { Component } from 'react';
import Instagram from './Intagram'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login';
import SignIn from './components/Login/SignIn'
import Forgot from './components/Login/ForgotPassword';
class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Instagram />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
          <Route exact path="/login/forgot">
            <Forgot/>
          </Route>
        </Switch>
      </Router>

    )
  }
}

export default App;
