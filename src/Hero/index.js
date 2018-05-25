import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './styles.css';

const Hero = () => (
  <div
    className="hero"
    style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}
  >
    <div className="hero__reading-well">
      <h1 className="hero__headline">
          <Zoom>
            <span>we are</span>
            <span>getting</span>
            <span className="italics">married!</span>
          </Zoom>
      </h1>
    </div>
  </div>
);

export default Hero;