import React, { Component } from 'react';
import Hero from './Hero';
import Countdown from './Countdown';
import SectionTitleAndDescription from './SectionTitleAndDescription';
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
    isAuthenticated: false,
    authenticationError: false
  };

  checkPassword = (password) => {
    if (process.env.REACT_APP_PASSWORD === password.toLowerCase()) {
      this.setState({ isAuthenticated: true });
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
            <SectionTitleAndDescription
              title="the couple"
              description="Simply just testing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <PhotoSideBySide
              leftPhoto={{src: 'https://image.ibb.co/n901PT/Chris_Tiffany65.jpg' }}
              rightPhoto={{src: 'https://image.ibb.co/cXa4g8/Chris_Tiffany120.jpg' }}
              orientation="portrait"
              rightStaggered
            />

            <WeddingDetails />
            <PhotoSideBySide
              leftPhoto={{src: 'https://image.ibb.co/gpSsW8/Chris_Tiffany136.jpg'}}
              rightPhoto={{src: 'https://image.ibb.co/dy4T4T/Chris_Tiffany51.jpg'}}
              orientation="landscape"
              rightStaggered
            />
            <WeddingParty />
            <PhotoSideBySide
              leftPhoto={{src: 'https://image.ibb.co/ganFjT/Chris_Tiffany142.jpg'}}
              rightPhoto={{src: 'https://image.ibb.co/dwqCW8/Chris_Tiffany79.jpg' }}
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
