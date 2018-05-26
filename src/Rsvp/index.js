import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionTitle from './../SectionTitle';
import Text from './../Text';
import SectionWrapper from './../SectionWrapper';
import './styles.css';
import ReadingWell from '../ReadingWell';

const Rsvp = () => (
  <SectionWrapper className="rsvp">
    <ReadingWell>
      <SectionTitle title="rsvp" />
      <Text text="Please RSVP by Sunday, November 11th, 2018." />
      <Fade bottom>
        <a
          className="rsvp__button"
          href="https://withjoy.com/huindrawan/rsvp"
          target="_blank"
          rel="noopener noreferrer"
        >
          rsvp
        </a>
      </Fade>
    </ReadingWell>
  </SectionWrapper>
);

export default Rsvp;