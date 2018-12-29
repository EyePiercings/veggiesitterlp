import React, { Component } from "react";
//import {Grid, Cell, Button} from 'react-mdl';
import { Container, Row, Col, Button } from "reactstrap";

class LandingPage extends Component {
  render() {
    return (
   <div style={{width: '100%', margin: 'auto'}}>
      <Container className="landing-grid">
      {/* Specifies the width of the page for the grid */}
        <Row>
          <Col xs='3'>
            <h1 id="opening-text">
              turn your black thumb into a <br/>green one
            </h1>
            <p id="under-opening"> 
          Veggie sitter is a upcoming mobile gardening application which introducees container gardening to users via our purchasable non-gmo seeds, push notifications, gps tracking, weather systems, and AI plant recognition. We seek to democratize the agricultural industry and teach the benefits of gardening on social health and environmental health. We’re chainging black thumbs into green ones one seed at a time.
          </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="banner-text">
          
            <div style={{textAlign: 'center', marginTop: '50px', color: '#33CC66', fontSize: '30px'}}>
                <strong>"nature and nurture"</strong>
            </div>
            
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/**
              When we've developed a video, I will insert it into this div here.
            */}
            <div className="video-box" />

            <hr />

            <Button raised ripple>
              Subscribe
            </Button>
          </Col>
        </Row>
      </Container>  
    </div>
    );

  }
}

export default LandingPage;
