import React, { Component } from "react";
import {Grid, Cell, Button} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
    <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
      {/* Specifies the width of the page for the grid */}
        <Cell col={12}>
          <div className="banner-text">
          <h1>
            who are we?
          </h1>
            <p>
              Veggie Sitter is an upcoming mobile gardening application which introduces container gardening to users via our purchasable non-gmo seeds, push notifications, gps tracking, weather systems, and A.I. plant recognition. We seek to democratize the agricultural industry and teach the benefits of gardening on social health and the environment.
              <br />
              We're changing black thumbs into green ones one seed at a time!
            </p>
            {/**
              When we've developed a video, I will insert it into this div here.
            */}
            <div className="video-box"></div>

            <hr />

            <Button raised ripple>
              Subscribe
            </Button>
          </div>

        </Cell>

      </Grid>  
    </div>
    );

  }
}

export default Landing;
