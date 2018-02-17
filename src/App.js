import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import SplashPage from './components/SplashPage.js';
import Projects from './components/Projects.js';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SplashPage}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
