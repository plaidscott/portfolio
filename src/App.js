import React, { Component } from 'react';
import { Button, ButtonToolbar, PageHeader, Navbar, Nav, NavItem, Grid, Row, Image, Col, Glyphicon } from "react-bootstrap";
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
    this.setState({ fadeOut : true},
      this.setState({ slideToSkills : false })
    )
  }
  render() {
    return (
      <div className="App">
          <div className="splashSection">
            <div className="splashContents fillContainer">
              <Image sm={2} src={portrait} className="portrait"></Image>
              <hr></hr>
              <h3>Hi, I'm <b>Scott Schermerhorn</b>. I am a Front End  <br></br>Developer currently living in Salt Lake City, UT</h3>
              <hr></hr>
              <div className="skillsLinkContainer" >
                {
                  this.state.slideToSkills ?
                  (
                    <div className="flexCenterCol" onClick={this.handleFadeSkillsPage}>
                      <a >Alright, I'll stop bragging</a>
                      <Glyphicon glyph="chevron-down"></Glyphicon>
                    </div>
                  )
                  :
                  (
                    <div className="flexCenterCol" onClick={this.handleSlideToSkills}>
                      <a >Wondering what skills I can bring?</a>
                      <Glyphicon glyph="chevron-up"></Glyphicon>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className={(this.state.slideToSkills ? "slidePageToSkills" : this.state.fadeOut ? "fadeSkillsPage" : "")} >
            <div className="skillsContents fillContainer ">
              <div className="spaceBetween fillContainer">
                <div className="flex-wrapSkills">
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
                <div className="flex-wrapSkills">
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
