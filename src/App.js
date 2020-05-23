import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Left from './components/Main/Left/Left';
import Right from './components/Main/Right/Right';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <div className="wrapper-main">
          <Right />
          <Left />
        </div>
      </div>

    </div>
  );
}

export default App;
