import React from 'react';

import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import Fade from 'react-reveal/Fade';
import './styles.css';

const Quote = () =>  (
  <SectionWrapper className="quote">
    <Fade>
      <ReadingWell className="quote__reading-well">
        <div className="quote__spacer" />
        <p className="quote__quote">For a really long time that's all I had. I just had <span className="quote__emphasis">little moments</span> with a girl who saw me as <span className="quote__emphasis">friend</span>. [...] But I think even then, I knew that I was waiting for my <span className="quote__emphasis">wife</span>.</p>
        <small className="quote__author">- Jim Halpert</small>
        <div className="quote__spacer" />
          <small className="quote__second-author">- Christopher Hui</small>
      </ReadingWell>
    </Fade>
  </SectionWrapper>
);


export default Quote;
