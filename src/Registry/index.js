import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionTitle from './../SectionTitle';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import AmazonSvg from './amazon';
import BedBathBeyondSvg from './bbb';
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
          <div className="registry__svg-wrapper">
            <ExternalLink url="https://www.amazon.com/wedding/share/huindrawan">
              <AmazonSvg />
            </ExternalLink>

            <ExternalLink url="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545988550&eventType=Wedding&pwsurl=">
              <BedBathBeyondSvg />
            </ExternalLink>
          </div>
      </ReadingWell>
    </Fade>
  </SectionWrapper>
);

export default Registry;
