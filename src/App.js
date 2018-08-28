import React, { Component } from 'react';
import ReadingWell from './ReadingWell';
import SectionTitle from './SectionTitle';
import Hero from './Hero';
import Countdown from './Countdown';
import SectionWrapper from './SectionWrapper';
import Quote from './Quote';
import PhotoSideBySide from './PhotoSideBySide';
import WeddingDetails from './WeddingDetails';
import WeddingParty from './WeddingParty';
import Registry from './Registry';
import Faq from './Faq';
import Rsvp from './Rsvp';
import Footer from './Footer';
import LoginScreen from './LoginScreen';

class App extends Component {
  state = {
    isAuthenticated: window.sessionStorage.getItem('authenticated') === 'true' ? true : false,
    authenticationError: false
  };

  checkPassword = (password) => {
    if (process.env.REACT_APP_PASSWORD === password.toLowerCase()) {
      this.setState({ isAuthenticated: true }, () => {
        window.sessionStorage.setItem('authenticated', 'true');
      });
    } else {
      this.setState({ authenticationError: true });
    }
  }

  render() {
    const { authenticationError, isAuthenticated } = this.state;
    return (
      <div className="app">
        {isAuthenticated ? (
          <div>
            <Hero />
            <Countdown />
            <SectionWrapper className="section-title-description">
              <ReadingWell>
                <SectionTitle title="the couple" />
                <p className="text">It all started with macaroni salad. Chris and Tiff first met in high school while serving at their church's homeless shelter where they made macaroni salad together. There's nothing more romantic then having your hands accidentally touch while mixing a pot full of hot macaroni, mayonnaise, mustard, and relish. They passed the time awkwardly talking about their love for jalapeño six dollar burgers, empathizing the inconvenience of not having their drivers licenses, and joked about all the eligible bachelors Tiff would meet in college. After that night, the two lost touch, but Tiff was always reminded of Chris every time she saw the small mustard stain on her white shoes, and Chris always let Tiff know every time he had a jalapeño six dollar burger. Little did they know, these seemingly innocent recollections would lead to something life long.</p>
                <p className="text">It's not really clear when Chris and Tiff started talking again, but they didn't waste any time. The two often studied together, went on hikes with friends together, made bets with one another, and looked for any reason to <span style={{ textDecoration: 'line-through' }}>flirt</span> talk with each other. Tiff planted the idea of going rock climbing and doing a mud run together, and Chris "coincidentally" ran to Tiff's house, but instead ran into her dad. (Fun fact: Chris couldn't make it home from that run and his groomsman Ben had to pick him up). It was evident they both enjoyed each other's company, but the relationship was never defined. After a period of ambiguity, Chris and Tiff started dating on August 14, 2013 and the rest is history!</p>
                <p className="text">It's a mystery to both of them why they didn't start dating sooner. Maybe it was a lack of self-awareness or a lack of intentionality, but one thing is clear to them; God's timing is perfect. Here we are nine years from their first conversation and five years from their first date; Chris and Tiff are getting married!</p>
              </ReadingWell>
            </SectionWrapper>
            <Quote />
            <PhotoSideBySide
              leftPhoto={{src: 'https://image.ibb.co/czd3r8/Chris_Tiffany65.jpg', position: '50% 75%' }}
              rightPhoto={{src: 'https://image.ibb.co/ejeyPT/Chris_Tiffany120.jpg', position: '50% 90%' }}
              orientation="portrait"
              rightStaggered
            />
            <WeddingDetails />
            <PhotoSideBySide
              leftPhoto={{src: 'https://image.ibb.co/jt1bdo/Chris_Tiffany49.jpg'}}
              rightPhoto={{src: 'https://image.ibb.co/gpMdPT/Chris_Tiffany7.jpg'}}
              orientation="landscape"
              rightStaggered
            />
            <WeddingParty />
            <PhotoSideBySide
              leftPhoto={{src: 'https://image.ibb.co/cpgpW8/Chris_Tiffany142.jpg'}}
              rightPhoto={{src: 'https://image.ibb.co/gyggB8/Chris_Tiffany38.jpg' }}
              orientation="landscape"
              rightStaggered
            />
            <Registry />
            <Faq />
            <Rsvp />
            <Footer />
          </div>
        ) : (
          <LoginScreen error={authenticationError} onCheckPassword={this.checkPassword} />
        )}
      </div>
    );
  }
}

export default App;
