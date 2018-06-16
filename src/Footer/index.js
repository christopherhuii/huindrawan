import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import './styles.css';

const Footer = () => (
  <SectionWrapper className="footer">
    <Fade>
      <ReadingWell>
        <p>
          built with <span role="img" aria-label="Heart">❤️</span> by the <a href="mailto:christopher.kam.hui@gmail.com">groom</a>
        </p>
      </ReadingWell>
    </Fade>
  </SectionWrapper>
);

export default Footer;
