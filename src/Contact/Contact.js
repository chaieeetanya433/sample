import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
      <h2 className="section-heading">Contact us</h2>
        <p className="contact-description">
          Have questions or need assistance? Contact our team. We're here to help!
        </p>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
