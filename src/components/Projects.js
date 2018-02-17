import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import share360 from '../media/share360.png';
import gardenScape from '../media/gardenScape.png';
import weatherAppPic from '../media/WeatherAppClip.png';

import '../styles/Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="ProjectsWrapper">
        <Grid className="" xs={12}>
          <Row className="titleContainer" xs={12}>
            <Col className="title" xs={6} xsOffset={3}>Personal Projects</Col>
          </Row>
          <Row>
            <Col className="projectsContainer" xs={12}>

              <Col xs={12} md={4} className="projectThumbnail">
                <Thumbnail src={share360} alt="Share360 Homepage Image">
                  <h3>Share 360</h3>
                  <p>An awesome file sharing site where you can share your favorite VR, or 360 videos! Built as part of an awesome team of devs</p>
                  <p>
                    <a href="https://share-360.herokuapp.com"><Button bsStyle="primary">Link to share360</Button></a>
                    <a href="https://github.com/Share360/Share360"><Button bsStyle="default">Link to Github repo</Button></a>
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} className="projectThumbnail">
                <Thumbnail src={weatherAppPic} alt="WeatherAppClip">
                  <h3>My Weather App</h3>
                  <p>A small, fun little app to make that incorporates a graph npm module called react easy chart. Utilizes the free OpenWeatherMap api service.</p>
                  <p>
                    <a href="https://plaidscott.github.io/weather/"><Button bsStyle="primary">Link to weatherApp</Button></a>
                    <a href="https://github.com/plaidscott/weather"><Button bsStyle="default">Link to Github repo</Button></a>
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} className="projectThumbnail">
                <Thumbnail src={gardenScape} alt="GardenScapeClip">
                  <h3>GardenScape</h3>
                  <p>A full stack app that allows my hypothetical business to more efficiently divide routes among employees for service.</p>
                  <p>
                    <a href="https://garden-scape.herokuapp.com"><Button bsStyle="primary">Video Walkthrough</Button></a>
                    <a href="https://github.com/plaidscott/garden-scape"></a><Button bsStyle="default">Link to Github repo</Button>
                  </p>
                </Thumbnail>
              </Col>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Projects;
