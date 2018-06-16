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

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hero />
        <Countdown />
        <SectionTitleAndDescription
          title="the couple"
          description="Simply just testing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <PhotoSideBySide
          leftPhoto="https://picsum.photos/1920/1280/?random"
          rightPhoto="https://picsum.photos/1920/1280/?random"
          rightStaggered
        />
        <WeddingDetails />
        <WeddingParty />
        <Registry />
        <Faq />
        <Rsvp />
        <Footer />
      </div>
    );
  }
}

export default App;
