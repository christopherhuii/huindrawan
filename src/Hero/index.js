import React from 'react';
import Zoom from 'react-reveal/Zoom';
import SectionWrapper from './../SectionWrapper';
import './styles.css';

const Hero = () => (
  <SectionWrapper
    className="hero"
    style={{ backgroundImage: "url('https://image.ibb.co/gOKHyo/Chris_Tiffany77.jpg')" }}
  >
    <div className="hero__reading-well">
      <h1 className="hero__headline">
        <Zoom>
          <span>
            <span>we are</span>
            <span>getting</span>
            <span className="italics">married!</span>
          </span>
        </Zoom>
      </h1>
    </div>
  </SectionWrapper>
);

export default Hero;