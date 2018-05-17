import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Text = ({ text, className }) => (
  <p className={['text', className].join(' ').trim()}>{text}</p>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

Text.defaultProps = {
  className: ''
};

export default Text;
