import React from 'react';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import Fade from 'react-reveal/Fade';
import './styles.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      days: this.getRemainingDays(),
      hours: this.getRemainingHours(),
      minutes: this.getRemainingMinutes(),
      seconds: this.getRemainingSeconds(),
    }
  }
  getRemainingTime = () => {
    const currentTime = new Date().getTime();
    const targetTime = new Date('Dec 14, 2018 17:00:00').getTime();

    return targetTime - currentTime;
  }

  getRemainingDays = () => (
    Math.floor(this.getRemainingTime() / (1000 * 60 * 60 * 24))
  )

  getRemainingHours = () => (
    Math.floor((this.getRemainingTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  )

  getRemainingMinutes = () => (
    Math.floor((this.getRemainingTime() % (1000 * 60 * 60)) / (1000 * 60))
  )

  getRemainingSeconds = () => (
    Math.floor((this.getRemainingTime() % (1000 * 60)) / 1000)
  )


  countdown = () => {
    this.setState({
      days: this.getRemainingDays(),
      hours: this.getRemainingHours(),
      minutes: this.getRemainingMinutes(),
      seconds: this.getRemainingSeconds()
    });
  }

  componentDidMount() {
    this.countdownInterval = setInterval(() => {
      this.countdown()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    return (
      <SectionWrapper className="countdown">
        <Fade>
          <ReadingWell>
            <span className="countdown__heading">Celebrate With Us</span>
            <span className="countdown__date">Friday</span>
            <span className="countdown__date">December 14th, 2018</span>
            <span className="countdown__date">5:00PM - 11:00PM</span>
            <div className="countdown__time-wrapper">
              <span>
                <span className="countdown__time">{days}</span>&nbsp;
                <span className="countdown__time-unit">{`day${days === 1 ? '' : 's'}`}</span>&nbsp;
              </span>
              <span>
                <span className="countdown__time">{hours}</span>&nbsp;
                <span className="countdown__time-unit">{`hour${hours === 1 ? '' : 's'}`}</span>&nbsp;
              </span>
              <span>
                <span className="countdown__time">{minutes}</span>&nbsp;
                <span className="countdown__time-unit">{`minute${minutes === 1 ? '' : 's'}`}</span>&nbsp;
              </span>
              <span>
                <span className="countdown__time">{seconds}</span>&nbsp;
                <span className="countdown__time-unit">{`second${seconds === 1 ? '' : 's'}`}</span>&nbsp;
              </span>
            </div>
          </ReadingWell>
        </Fade>
      </SectionWrapper>
    );
  }
}

export default Countdown;
