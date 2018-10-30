import React from 'react';
import ScrollToPrevious from '@components/ScrollToPrevious';
import SocialIcons from '@components/SocialIcons';


import './style.scss';

const ContactPage = () => {
  
  return (
    <section id="contact" className="contact-page">
      <div className="content-grid">
      <h1>Contact</h1>
        <div className="contact-wrapper">
          <div className="heading">
            <p className="subtitle">
              Please, use the form below or send an email to {''}
              <span className="mail">
                nhithai88
                <i className="fas fa-at at" />
                gmail
                <i className="fas fa-circle dot" />
                com
              </span>
              :
            </p>
          </div>
          { <SocialIcons />}
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </section>
  );
};

export default ContactPage;
