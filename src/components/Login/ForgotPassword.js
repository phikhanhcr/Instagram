import React, { PureComponent } from 'react';
import axios from 'axios'
class Forgot extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      pass: '',
      pass2: '',
      checkMail: false,
      checkUserName: false,
      checkPass: false
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value,
      checkMail: false,
      checkUserName: false
    })
  }
  onSubmit = event => {
    event.preventDefault();
    axios.get('http://localhost:3001/api/user')
      .then(res => {
        let data = res.data;
        // check email
        const checkUserMail = data.filter(ele => {
          return ele.email === this.state.email;
        })
        if (!checkUserMail.length) {
          this.setState({
            checkMail: true
          })
          return;
        }
        // check username
        const checkUser = data.filter(ele => {
          return ele.username === this.state.name;
        })
        if (!checkUser.length) {
          this.setState({
            checkUserName: true
          })
          return;
        }
        // check pass
        if (this.state.pass !== this.state.pass2) {
          this.setState({
            checkPass: true
          })
          return;
        }
        console.log(checkUser)
        const id = checkUser[0]._id;
        const newPass = {
          password: this.state.pass2
        }
        axios.put(`http://localhost:3001/api/user/${id}`, { newPass })
          .then(res => {
            console.log(res)
            console.log(res.data)
          }).catch(err => {
            console.log("Loi r em oi " + err)
          })
      })
  }

  render() {
    const { email, name, pass, pass2, checkMail, checkUserName, checkPass } = this.state;
    let className = "alert alert-warning display";
    let className1 = "alert alert-warning display";
    let className2 = "alert alert-warning display";
    if (checkMail) {
      className = "alert alert-warning"
    }
    if (checkUserName) {
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
            <h3>Forgot Your Password</h3>
            <div className={className} role="alert">
              Email doesn't exists !!!
            </div>
            <div className={className1} role="alert">
              Name doesn't exists !!!
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
              <button className="btn btn-primary">OKE</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;