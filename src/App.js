import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Left from './components/Main/Left/Left';
import Right from './components/Main/Right/Right';
import DisplayNews from './components/Main/Right/New/DisplayNew'
class App extends Component {
  constructor() {
    super();

    this.state = {
      displayNew: false 
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

  }
  render() {
    const { displayNew } = this.state;
    return (
      <div className="App">
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
