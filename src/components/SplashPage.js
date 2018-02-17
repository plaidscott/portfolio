import React, { Component } from 'react';
import { Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../styles/SplashPage.css';
import portrait from '../media/scott-portrait.JPG';


class SplashPage extends Component {
  constructor(props){
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
      <div className="splashPage">
        <div className="splashSection">
          <div className="splashContents fillContainer">
            <div className="flip-container">
              <div className="flipper">
                <Image sm={2} src={portrait} className="portrait front"></Image>
                <div className="back"><Link to="/projects">Learn more about What I can do.</Link></div>
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
                    <Link to="./projects">
                      Click here to see some past work.
                    </Link>
                  </Button>
                )
                :
                (
                  <Button className="flexCenterCol" bsStyle="primary" onClick={this.handleSlideToSkills}>
                    Learn more about what I can do.
                  </Button>
                )
              }
            </div>
          </div>
        </div>
        <div className={(this.state.slideToSkills ? "slidePageToSkills" :  "hiding")} >
          <div className="skillsContents fillContainer ">
            <div className="spaceBetween fillContainer">
              <div className="flex-wrapSkills skillsOne">
                <i className="devicon-angularjs-plain colored icon"></i>
                <i className="devicon-react-original colored icon"></i>
                <i className="devicon-bootstrap-plain colored icon"></i>
                <i className="devicon-css3-plain colored icon"></i>
                <i className="devicon-git-plain colored icon"></i>
                <i className="devicon-github-plain colored icon"></i>
                <i className="devicon-gitlab-plain colored icon"></i>
                <i className="devicon-gulp-plain colored icon"></i>
                <i className="devicon-sass-original colored icon"></i>
              </div>
              <div className="flex-wrapSkills skillsTwo">
                <i className="devicon-heroku-original colored icon"></i>
                <i className="devicon-html5-plain colored icon"></i>
                <i className="devicon-javascript-plain colored icon"></i>
                <i className="devicon-jquery-plain colored icon"></i>
                <i className="devicon-less-plain-wordmark colored icon"></i>
                <i className="devicon-mongodb-plain colored icon"></i>
                <i className="devicon-mysql-plain colored icon"></i>
                <i className="devicon-nodejs-plain colored icon"></i>
                <i className="devicon-postgresql-plain colored icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashPage;
