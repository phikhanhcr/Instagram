import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import classNames from 'classnames'
import axios from 'axios';

class SignIn extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: '',
      pass: '',
      pass2: '',
      signedIn: false,
      checkEmail: false,
      checkName: false,
      checkPass: false
    }
  }
  onChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
    this.setState({
      checkEmail: false,
      checkName: false,
      checkPass: false
    })
  }
  onSubmit = event => {
    event.preventDefault()
    axios.get('http://localhost:3001/api/user')
      .then(res => {
        let data = res.data;
        console.log(data)
        var newUser = {
          email: this.state.email,
          username: this.state.name,
          password: this.state.pass
        }
        const checkUserEmail = data.filter(ele => {
          return ele.email === newUser.email
        })
        console.log(checkUserEmail)
        if (checkUserEmail.length) {
          this.setState({
            checkEmail: true
          })
          return;
        }

        const checkUserName = data.filter(ele => {
          return ele.username === newUser.username
        })
        if (checkUserName.length) {
          this.setState({
            checkName: true
          })
          return;
        }

        if (this.state.pass !== this.state.pass2) {
          this.setState({
            checkPass: true
          })
          return;
        }


        axios.post('http://localhost:3001/api/user', { newUser })
          .then(function (response) {
            console.log(response);
            console.log("hi " + response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({
          signedIn: true
        })
      })
  }

  render() {
    const { email, name, pass, pass2, checkEmail, checkName, checkPass, signedIn } = this.state;
    if (signedIn) {
      return <Redirect to="/login" />
    }
    let className = "alert alert-warning display";
    let className1 = "alert alert-warning display";
    let className2 = "alert alert-warning display";
    if (checkEmail) {
      className = "alert alert-warning"
    }
    if (checkName) {
      className1 = "alert alert-warning"
    }
    if (checkPass) {
      className2 = "alert alert-warning"
    }
    return (
      <div className="Login">
        <div className="wrapper-login">
          <div className="child-login">
            <h1>Instagram</h1>
            <div className={className} role="alert">
              Email already exists !!!
            </div>
            <div className={className1} role="alert">
              Name already exists !!!
            </div>
            <div className={className2} role="alert">
              Pass không trùng nhau
            </div>
            <form onSubmit={this.onSubmit}>
              <input type="email" placeholder="Email" name="email"
                value={email} onChange={this.onChange} required />
              <input type="text" placeholder="Username" name="name"
                value={name} onChange={this.onChange} required />
              <input type="pass" placeholder="Password" name="pass"
                value={pass} onChange={this.onChange} required />
              <input type="pass" placeholder="Password Again" name="pass2"
                value={pass2} onChange={this.onChange} required />
              <button className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default SignIn;