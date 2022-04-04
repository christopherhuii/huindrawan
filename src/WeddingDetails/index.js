import React from 'react';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import SectionTitle from './../SectionTitle';
import colonyHouse from './colony-house.jpg';
import Fade from 'react-reveal/Fade';

import './styles.css';

const Event = ({ time, name, description, link }) => {
  const TitleTag = link ? 'a' : 'span';
  const titleProps = {};
  
  if (link) {
    titleProps.target = "_blank";
    titleProps.rel = "noopener noreferrer";
    titleProps.href = link;
  }

  return (
    <div className="wedding-details__event-wrapper">
      <span className="wedding-details__time">
        {time}
        <span className="wedding-details__ampm">pm</span>
      </span>
      <div className="wedding-details__event">
        <TitleTag
          className={`wedding-details__event-name ${link ? 'wedding-details__event-name--link' : ''}`}
          {...titleProps}
        >
          {name}
        </TitleTag>
        <span className="wedding-details__event-details">{description}</span>
      </div>
    </div>
  );
};

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
                description="join us in celebrating the beginning of the rest of our lives!"
                // link="https://www.youtube.com/watch?v=M9gWyGoYoAo"
              />
              <Event
                time="4:30"
                name="cocktail hour"
                description="it's actually an hour and a half. thank you for your patience while we flip the space."
                link="https://www.youtube.com/watch?v=4f59ZtVeTr0"
              />
              <Event
                time="6:00"
                name="reception"
                description="drink every time someone says 'happy wife, happy life'."
                link="https://www.youtube.com/watch?v=5Asdw-uVeyQ"
              />
              <Event
                time="10:00"
                name="closing time"
                description="you don't have to go home but you can't stay here."
                link="https://www.youtube.com/watch?v=xGytDsqkQY8"
              />
            </div>
          </div>
        </Fade>
      </div>
    </ReadingWell>
  </SectionWrapper>

);

export default WeddingDetails;
