import React from 'react';
import PortfolioItem from '@components/PortfolioItem';
// import ScrollToNext from '@components/ScrollToNext';

import portfolioItems from './portfolio-items';

import './style.scss';

const PortfolioPage = () => {
  
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
         
          {/* <PortfolioItem /> */}
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      {/* <ScrollToNext pageSelector=".contact-page" /> */}
    </div>
  );
};

export default PortfolioPage;
