import React from 'react';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = () => {

  return (
    <div className="about-page" >
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="about-content">
            <p>
              I’ve been specializing in <span className="highlight">front-end</span> development and responsive design for several years now, and enjoy a good coding challenge.
            </p>
            <p>
              I take on coding projects dealing with static website development for app integrations or plain websites, responsive design,  <span className="highlight">Joomla/WordPress CMS</span> development.
          I deal with all of the <span className="highlight">HTML, CSS, JS, and PHP</span> needed to fully integrate a custom design into the web.
            </p>
            <p>
            Everything is beautifully  <span className="highlight">responsive</span> and works across a variety of devices and browsers. I specialize in bringing full desktop sites down to the smallest mobile size, and everything in between. Consistency from your designs to beautiful usable mobile layouts is key, and an emphasis on mobile usability is important.
            </p>
            <p>
              Work is always delivered <span className="highlight">on-time</span> or ahead of schedule with emphasis on great communication.
            </p>
            <p>
            Thank you for taking the time to get to know a little bit about me and my projects. Feel free to connect with me on <a href="https://www.linkedin.com/in/nhi-thai" className="highlight">Linkedin</a>, and let's share our story and learn from each other! 
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

export default AboutPage;
