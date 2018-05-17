import React from 'react';
import PropTypes from 'prop-types';
import ReadingWell from './../ReadingWell';
import SectionWrapper from './../SectionWrapper';
import SectionTitle from './../SectionTitle';
import Text from './../Text';
import './styles.css';

const SectionTitleAndDescription = ({ title, description}) => (
  <SectionWrapper className="section-title-description">
    <ReadingWell>
      <SectionTitle title={title} />
      <Text text={description} />
    </ReadingWell>
  </SectionWrapper>
);

SectionTitleAndDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionTitleAndDescription;
