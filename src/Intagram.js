import React, { Component } from 'react';

import './App.css';
import { Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import Left from './components/Main/Left/Left';
import Right from './components/Main/Right/Right';
import DisplayNews from './components/Main/Right/New/DisplayNew'
import ReactNotificationsComponent from 'react-notifications-component';

//import { subscribeToTimer } from './api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followFriends: []
    }
    const token = localStorage.getItem('token');
    let loggedIn = true;
    if (!token) {
      loggedIn = false
    }

    this.state = {
      displayNew: false,
      loggedIn
    }
  }

  displayNews = () => {
    this.setState({
      displayNew: true
    })
  }

  changeDisplay = () => {
    this.setState({
      displayNew: false
    })

    // subscribeToTimer((err, timestamp) => this.setState({
    //   timestamp
    // }));
  }
  render() {
    const { displayNew, loggedIn } = this.state;
    if (!loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div className="App">
        <ReactNotificationsComponent />
        <DisplayNews state={displayNew} changeDisplay={this.changeDisplay} />
        <Header />
        <div className="Main">
          <div className="wrapper-main">

            <Right displayNew={this.displayNews} />
            <Left />
          </div>
        </div>
       
      </div>
    )
  }
}

export default App;
