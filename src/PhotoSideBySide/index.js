import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import SectionWrapper from './../SectionWrapper';
import './styles.css';

const Photo = ({ photo }) => (
  <img
    className="photo-side-by-side__photo"
    alt="jsx"
    src={photo}
  />
);

const PhotoSideBySide = ({
  leftPhoto,
  rightPhoto,
  leftStaggered,
  rightStaggered,
}) => (
  <SectionWrapper className="photo-side-by-side">
    <div className="photo-side-by-side__wrapper">
      <div className="photo-side-by-side__column">
        <Fade left>
          <Photo photo={leftPhoto} />
        </Fade>
      </div>
      <div className="photo-side-by-side__column">
        <Fade right>
          <Photo photo={rightPhoto} />
        </Fade>
      </div>
    </div>      
  </SectionWrapper>
);

PhotoSideBySide.propTypes = {
  leftPhoto: PropTypes.string.isRequired,
  rightPhoto: PropTypes.string.isRequired,
  leftStaggered: PropTypes.bool,
  rightStaggered: PropTypes.bool,
}

PhotoSideBySide.defaultProps = {
  leftStaggered: false,
  rightStaggered: false,
}

export default PhotoSideBySide;
