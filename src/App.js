import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import SplashPage from './components/SplashPage.js';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
          <SplashPage />
      </div>
    );
  }
}

export default App;
