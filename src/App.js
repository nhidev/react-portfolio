import React, { Component } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ScrollTop />
          <Footer />
      </div>
    );
  }
}

export default App;
