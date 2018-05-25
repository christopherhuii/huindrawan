import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionTitle from './../SectionTitle';
import Text from './../Text';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import AmazonSvg from './amazon';
import BedBathBeyondSvg from './bbb';
import CrateBarrelSvg from './cb';
import './styles.css';

const ExternalLink = ({ url, children }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Registry = () => (
  <SectionWrapper className="registry">
    <Fade>
      <ReadingWell>
        <SectionTitle title="registry" />
        <Text text="Godfather ipsum dolor sit amet. Leave the gun. Take the cannoli. You can act like a man! My father is no different than any powerful man, any man with power, like a president or senator. I'm your older brother, Mike, and I was stepped over!" />
          <div className="registry__svg-wrapper">
            <ExternalLink url="https://www.amazon.com/wedding/share/huindrawan">
              <AmazonSvg />
            </ExternalLink>

            <ExternalLink url="https://www.amazon.com">
              <CrateBarrelSvg />
            </ExternalLink>

            <ExternalLink url="https://www.amazon.com">
              <BedBathBeyondSvg />
            </ExternalLink>
          </div>
      </ReadingWell>
    </Fade>
  </SectionWrapper>
);

export default Registry;
