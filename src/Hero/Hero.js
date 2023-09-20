import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Unlock Your Potential<br />with AI-Powered Career Guidance
        </h1>
        <p className="hero-subtitle">
          Empowering Secondary-Level Students<br />to Make Informed Career Choices
        </p>
        <a href="#features" className="cta-button">
          Get Started
        </a>
      </div>
      <div className="hero-image">
        {/* Replace this with your captivating hero image or video */}
        <img
          src="your-hero-image.jpg"
          alt="Hero Image"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;