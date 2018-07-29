import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import SectionWrapper from './../SectionWrapper';
import './styles.css';

const Photo = ({ photo, orientation }) => {
  const styles = {
    backgroundImage: `url(${photo.src})`
  };

  if (photo.position) {
    styles.backgroundPosition = photo.position;
  }
  
  return (
    <div
      className={`photo-side-by-side__photo ${orientation === 'portrait' ? 'photo-side-by-side__photo--portrait' : 'photo-side-by-side__photo--landscape'}`}
      style={styles}
    />
  );
};

const PhotoSideBySide = ({
  leftPhoto,
  rightPhoto,
  leftStaggered,
  rightStaggered,
  orientation,
}) => (
  <SectionWrapper className={`photo-side-by-side ${orientation === 'portrait' ? 'photo-side-by-side--portrait' : 'photo-side-by-side--landscape'}`}>
    <div className="photo-side-by-side__wrapper">
      <div className={`photo-side-by-side__column`}>
        <Fade left>
          <Photo photo={leftPhoto} orientation={orientation} />
        </Fade>
      </div>
      <div className="photo-side-by-side__column">
        <Fade right>
          <Photo photo={rightPhoto} orientation={orientation} />
        </Fade>
      </div>
    </div>      
  </SectionWrapper>
);

PhotoSideBySide.propTypes = {
  leftPhoto: PropTypes.shape({
    src: PropTypes.string.isRequired,
    position: PropTypes.string
  }).isRequired,
  rightPhoto: PropTypes.shape({
    src: PropTypes.string.isRequired,
    position: PropTypes.string
  }).isRequired,
  leftStaggered: PropTypes.bool,
  rightStaggered: PropTypes.bool,
  orientation: PropTypes.string.isRequired,
}

PhotoSideBySide.defaultProps = {
  leftStaggered: false,
  rightStaggered: false,
}

export default PhotoSideBySide;
