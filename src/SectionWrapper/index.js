import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SectionWrapper = ({ className, children }) => (
  <section className={['section-wrapper', className].join(' ').trim()}>
    {children}
  </section>
);

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
};

SectionWrapper.defaultProps = {
  className: ''
};

export default SectionWrapper;
