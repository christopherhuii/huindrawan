import React from 'react';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import SectionTitle from './../SectionTitle';
import colonyHouse from './colony-house.jpg';
import Fade from 'react-reveal/Fade';

import './styles.css';

const Event = ({ time, name, description }) => (
  <div className="wedding-details__event-wrapper">
    <span className="wedding-details__time">
      {time}
      <span className="wedding-details__ampm">pm</span>
    </span>
    <div className="wedding-details__event">
      <span className="wedding-details__event-name">{name}</span>
      <span className="wedding-details__event-details">{description}</span>
    </div>
  </div>
);

const WeddingDetails = () => (
  <SectionWrapper className="wedding-details">
    <ReadingWell>
      <SectionTitle title="wedding details" />
      <div className="wedding-details__wrapper">
        <Fade left>
          <div className="wedding-details__column">
            <address className="wedding-details__address">
              <p className="wedding-details__venue-name">the colony house</p>
              <a
                className="wedding-details__link"
                href="https://goo.gl/maps/TLn4EEsLNEr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="wedding-details__venue-address">401 N Anaheim Blvd</p>
                <p className="wedding-details__venue-address">Anaheim, CA 92805</p>
              </a>
            </address>
            <img
              className="wedding-details__venue-image"
              alt="The Colony House"
              src={colonyHouse}
            />
            <a
              className="wedding-details__credit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://colonyhouseanaheim.com"
            >The Colony House</a>
          </div>
        </Fade>
        <Fade right>
          <div className="wedding-details__column">
            <SectionTitle title="schedule of events" />
            <div className="wedding-details__timeline">
              <Event
                time="4:00"
                name="ceremony"
                description=""
              />
              <Event
                time="4:30"
                name="cocktail hour"
                description=""
              />
              <Event
                time="6:00"
                name="reception"
                description=""
              />
              <Event
                time="10:00"
                name="closing time"
                description="you don't have to go home but you can't stay here."
              />
            </div>
          </div>
        </Fade>
      </div>
    </ReadingWell>
  </SectionWrapper>

);

export default WeddingDetails;
