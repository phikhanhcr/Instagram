import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import './Login.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';
class Login extends PureComponent {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    let loggedIn = true;
    if (!token) {
      loggedIn = false
    }
    this.state = {
      username: '',
      password: '',
      loggedIn,
      checkUser: false,
      checkPass: false
    }
  }

  onChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }
  onSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state;
    console.log({ username, password })
    axios.get('http://localhost:3001/api/user')
      .then(res => {
        let data = res.data;

        let checkUserName = data.filter(ele => {
          return ele.username === username
        })
        if (!checkUserName.length) {
          this.setState({
            checkUser: true
          })
          return;
        }
        // check pass
        let checkPassword = data.filter(ele => {
          return ele.password === password
        })
        if (!checkPassword.length) {
          this.setState({
            checkPass: true
          })
          return;
        }
        // everything is oke
        console.log(checkPassword[0].username)
        localStorage.setItem("token", checkPassword[0].username)
        console.log(localStorage.getItem('token'))
        this.setState({
          loggedIn: true
        })

      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    const { username, password, loggedIn, checkUser , checkPass } = this.state;
    let classNameUser = 'alert alert-warning display';
    let classNamePass = 'alert alert-warning display';
    if(checkUser) {
      classNameUser = 'alert alert-warning';
    }
    if(checkPass){
      classNamePass = 'alert alert-warning';
    }
    if (loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="Login">
        <div className="wrapper-login">
          <div className="child-login">
            <h1>Instagram</h1>
            <div className={classNameUser} role="alert">
              Username doesn't exists !!!
            </div>
            <div className={classNamePass} role="alert">
              Oop, Wrong Password !!!
            </div>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}

                onChange={this.onChange}
                required />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}

                onChange={this.onChange}
                required />
              <button className="btn btn-primary">Log In</button>
            </form>
            <p>Or</p>
            <div>
              <a href="/login/forgot">
                Forgot your password
            </a>
            </div>
          </div>
          <div className="sign-in">
            <p>You don't have account </p>
            <a href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;