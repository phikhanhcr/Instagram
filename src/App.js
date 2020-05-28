import React, { Component } from 'react';
import Instagram from './Intagram'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login';
import SignIn from './components/Login/SignIn'
class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Instagram />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
        </Switch>
      </Router>

    )
  }
}

export default App;
