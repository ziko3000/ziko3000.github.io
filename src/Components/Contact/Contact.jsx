import React from 'react';
import SocialLinks from '../SocialLinks';
import './Contact.css';

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please feel free to send an email to for collaboration or any questions {''}
              <span className="mail">
                fammercury
                <i className="fas fa-at at" />
                gmail
                <i className="fas fa-circle dot" />
                com
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;
