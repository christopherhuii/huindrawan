import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ReadingWell = ({ className, children }) => (
  <div className={['reading-well', className].join(' ').trim()}>
    {children}
  </div>
);

ReadingWell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
};

ReadingWell.defaultProps = {
  className: ''
};

export default ReadingWell;
