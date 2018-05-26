import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionTitle from './../SectionTitle';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import './styles.css';

const QuestionWrapper = ({ children }) => (
  <div className="faq__question-wrapper">{children}</div>
)
const Question = ({ question }) => (
  <b className="faq__question">{question}</b>
);

const Answer = ({ answer }) => (
  <p className="faq__answer">{answer}</p>
);

const Faq = () => (
  <SectionWrapper className="faq">
    <ReadingWell>
      <SectionTitle title="faq" />
      <Fade bottom>
        <QuestionWrapper>
          <Question question="What time should I arrive?" />
          <Answer answer="The ceremony will begin promptly at 5:00pm with cocktail hour and dinner reception to follow. Please aim to arrive 10-15 minutes early to accommodate for unexpected traffic and parking." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Is the wedding indoor or outdoor?" />
          <Answer answer="Both ceremony and reception are indoor, but there is an outdoor patio area for guests to hangout and mingle." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Is there a dress code?" />
          <Answer answer="Cocktail attire or business casual" />
          <Answer answer="Southern California weather can be unpredictable, so please keep an eye on the weather forecast and dress accordingly." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="What's the parking situation like?" />
          <Answer answer="Carpooling is encouraged, but the venue has a private parking lot to accommodate all of our guests." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Can I bring my children?" />
          <Answer answer="Godfather ipsum dolor sit amet. Leave the gun. Take the cannoli. You can act like a man! My father is no different than any powerful man, any man with power, like a president or senator. I'm your older brother, Mike, and I was stepped over!" />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Can I bring a date?" />
          <Answer answer="Godfather ipsum dolor sit amet. Leave the gun. Take the cannoli. You can act like a man! My father is no different than any powerful man, any man with power, like a president or senator. I'm your older brother, Mike, and I was stepped over!" />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Will there be alcohol?" />
          <Answer answer="Godfather ipsum dolor sit amet. Leave the gun. Take the cannoli. You can act like a man! My father is no different than any powerful man, any man with power, like a president or senator. I'm your older brother, Mike, and I was stepped over!" />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Still have questions?" />
          <Answer answer="Godfather ipsum dolor sit amet. Leave the gun. Take the cannoli. You can act like a man! My father is no different than any powerful man, any man with power, like a president or senator. I'm your older brother, Mike, and I was stepped over!" />
        </QuestionWrapper>
        <br /><br />
      </Fade>
    </ReadingWell>
  </SectionWrapper>
);

export default Faq;
