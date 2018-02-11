import React, { Component } from 'react';
import { Button, ButtonToolbar, PageHeader, Navbar, Nav, NavItem, Grid, Row, Image, Col, Glyphicon } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import "./App.css";
import portrait from './media/scott-portrait.JPG';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideToSkills: false,
      fadeOut: false
    }
  }

  handleSlideToSkills = () => {
    this.setState({ slideToSkills : true},
      this.setState({ fadeOut: false })
    );
  }

  handleFadeSkillsPage = () => {
    // this.setState({ fadeOut : true},
    //   this.setState({ slideToSkills : false })
    // )
  }
  render() {
    return (
      <div className="App">
          <div className="splashSection">
            <div className="splashContents fillContainer">
              <div class="flip-container">
                <div class="flipper">
                  <Image sm={2} src={portrait} className="portrait front"></Image>
                  <div className="back"><a href="#" className="noTextDecoration" >Ready for some samples of what I can do?<br></br>Go ahead ... click ... I dare you.</a></div>
                </div>
              </div>

              <hr></hr>
              <h3>Hi, I'm <b>Scott Schermerhorn</b>. I am a Front End  <br></br>Developer currently living in Salt Lake City, UT</h3>
              <hr></hr>
              <div className="skillsLinkContainer" >
                {
                  this.state.slideToSkills ?
                  (
                    <Button className="flexCenterCol" bsStyle="info" onClick={this.handleFadeSkillsPage}>
                      Click here to see some past work.
                    </Button>
                  )
                  :
                  (
                    <Button className="flexCenterCol" bsStyle="primary" onClick={this.handleSlideToSkills}>
                      Wondering what skills I can bring?
                    </Button>
                  )
                }
              </div>
            </div>
          </div>
          <div className={(this.state.slideToSkills ? "slidePageToSkills" : this.state.fadeOut ? "fadeSkillsPage" : "")} >
            <div className="skillsContents fillContainer ">
              <div className="spaceBetween fillContainer">
                <div className="flex-wrapSkills skillsOne">
                  <i class="devicon-angularjs-plain colored icon"></i>
                  <i class="devicon-react-original colored icon"></i>
                  <i class="devicon-bootstrap-plain colored icon"></i>
                  <i class="devicon-css3-plain colored icon"></i>
                  <i class="devicon-git-plain colored icon"></i>
                  <i class="devicon-github-plain colored icon"></i>
                  <i class="devicon-gitlab-plain colored icon"></i>
                  <i class="devicon-gulp-plain colored icon"></i>
                  <i class="devicon-sass-original colored icon"></i>
                </div>
                <div className="flex-wrapSkills skillsTwo">
                  <i class="devicon-heroku-original colored icon"></i>
                  <i class="devicon-html5-plain colored icon"></i>
                  <i class="devicon-javascript-plain colored icon"></i>
                  <i class="devicon-jquery-plain colored icon"></i>
                  <i class="devicon-less-plain-wordmark colored icon"></i>
                  <i class="devicon-mongodb-plain colored icon"></i>
                  <i class="devicon-mysql-plain colored icon"></i>
                  <i class="devicon-nodejs-plain colored icon"></i>
                  <i class="devicon-postgresql-plain colored icon"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
