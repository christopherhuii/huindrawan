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
          <Answer answer="The ceremony will begin promptly at 4:00pm." />
          <Answer answer="Please aim to arrive 10-15 minutes early to accommodate for unexpected Friday traffic, time to sign in, and time to find the perfect seat!" />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="What's the parking situation like?" />
          <Answer answer="The venue has a self-serve private parking lot to accommodate all of our guests." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Is the wedding indoor or outdoor?" />
          <Answer answer="Both ceremony and reception are indoor, but there is an outdoor patio area for guests to mingle." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Is there a dress code?" />
          <a className="faq__answer"
            href="https://www.theknot.com/content/wedding-guest-attire-cheat-sheet"
            target="_blank"
            rel="noopener noreferrer"
          >Cocktail Attire or Business Casual</a>
          <br />
          <Answer answer="Southern California weather can be unpredictable, so please keep an eye on the weather forecast and dress comfortably." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Will there be food?" />
          <Answer answer="Immediately after the ceremony, there will be a cocktail hour with drinks and passed Hors d'Oeuvres followed by a dinner reception." />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Can I bring my children or a date?" />
          <Answer answer="As much as we would love to celebrate with all of our friends, we are only able to accommodate the number of guests that have been reserved for your household. Please feel free to contact us with any questions!" />
        </QuestionWrapper>
        <br /><br />
        <QuestionWrapper>
          <Question question="Still have questions?" />
          <p className="faq__answer">
             If you have any additional questions, please feel free to contact the&nbsp;
             <a className="faq__answer" href="mailto:tiff.indrawan@gmail.com">bride</a> or <a className="faq__answer" href="mailto:christopher.kam.hui@gmail.com">groom</a>.
          </p>
        </QuestionWrapper>
        <br /><br />
      </Fade>
    </ReadingWell>
  </SectionWrapper>
);

export default Faq;
