import React from 'react';

import './style.scss';

const SocialIcons = (props, context) => {
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nhidev"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/nhithai"><i className="fab fa-codepen"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nhi-thai"><i className="fab fa-linkedin"></i></a>
      </div>
  );
};


export default SocialIcons;