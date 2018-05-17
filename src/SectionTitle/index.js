import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SectionTitle = ({ title, className }) => (
  <h3 className={['section-title', className].join(' ').trim()}>{title}</h3>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

SectionTitle.defaultProps = {
  className: ''
};

export default SectionTitle;
