import React from 'react';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import SectionTitle from './../SectionTitle';
import colonyHouse from './colony-house.jpg';
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
        <div className="wedding-details__column">
          <address className="wedding-details__address">
            <p className="wedding-details__venue-name">the colony house</p>
            <p className="wedding-details__venue-address">401 N Anaheim Blvd</p>
            <p className="wedding-details__venue-address">Anaheim, CA 92805</p>
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
        <div className="wedding-details__column">
          <SectionTitle title="schedule of events" />
          <div className="wedding-details__timeline">
            <Event
              time="5:00"
              name="ceremony"
              description="lorem ipsum dolor sit amet note tha hte development build is not optimized."
            />
            <Event
              time="5:30"
              name="cocktail hour"
              description="lorem ipsum dolor sit amet note tha hte development build is not optimized."
            />
            <Event
              time="7:00"
              name="reception"
              description="lorem ipsum dolor sit amet note tha hte development build is not optimized."
            />
            <Event
              time="11:00"
              name="closing time"
              description="lorem ipsum dolor sit amet note tha hte development build is not optimized."
            />
          </div>
        </div>
      </div>
    </ReadingWell>
  </SectionWrapper>

);

export default WeddingDetails;
