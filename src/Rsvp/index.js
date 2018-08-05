import React from 'react';
import SectionTitle from './../SectionTitle';
import Text from './../Text';
import SectionWrapper from './../SectionWrapper';
import './styles.css';
import ReadingWell from '../ReadingWell';

const Rsvp = () => (
  <SectionWrapper className="rsvp">
    <ReadingWell>
      <SectionTitle title="rsvp" />
      <Text text="Please RSVP by Wednesday, November 14th, 2018." />
      <a
        className="rsvp__button"
        href="https://withjoy.com/huindrawan/rsvp"
        target="_blank"
        rel="noopener noreferrer"
      >
        rsvp
      </a>
    </ReadingWell>
  </SectionWrapper>
);

export default Rsvp;