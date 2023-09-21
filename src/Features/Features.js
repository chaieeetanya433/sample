import React from 'react';
import './Features.css';

import icon1 from '../assets/—Pngtree—career_3634495.png';
import icon2 from '../assets/what-if-scenario.png';
import icon3 from '../assets/pngtree-hand-drawn-creative-world-mental-health-day-kids-png-image_5506168.jpg';
import icon5 from '../assets/pngtree-counseling-on-mental-health-problems-and-flat-illustration-problems-png-image_6855458.png'
import icon4 from '../assets/Goal_setting_software.webp';
import icon6 from '../assets/download-1-1.webp';

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="section-heading">Core Features</h2>
      <div className="feature-item">
        <img src={icon1} alt="Feature Icon 1" className="feature-icon" />
        <h3 className="feature-title">Personalized Ai Powered Career Recommendations</h3>
        <p className="feature-description">
          Receive tailored career suggestions based on your skills, interests, and aspirations.
        </p>
      </div>
      <div className="feature-item">
        <img src={icon2} alt="Feature Icon 2" className="feature-icon" />
        <h3 className="feature-title">"What If" Scenario Generator</h3>
        <p className="feature-description">
        Allow students to explore alternative career paths with a "What If" scenario generator that shows them where different choices could lead.
        </p>
      </div>
      <div className="feature-item">
        <img src={icon3} alt="Feature Icon 3" className="feature-icon" />
        <h3 className="feature-title">Emotional Support and Well-being Resources</h3>
        <p className="feature-description">
        Offering resources for managing stress, anxiety, and mental well-being during the career decision-making process.
        </p>
      </div>
      <div className="feature-item">
        <img src={icon5} alt="Feature Icon 3" className="feature-icon" />
        <h3 className="feature-title">College Admission Predictor</h3>
        <p className="feature-description">
        Empower students with a College Admission Predictor feature that simplifies the admission process. 
        </p>
      </div>
      <div className="feature-item">
        <img src={icon4} alt="Feature Icon 4" className="feature-icon" />
        <h3 className="feature-title">Goal Setting and Tracking</h3>
        <p className="feature-description">
        Allowing students to set and track short-term and long-term career goals, with reminders and progress tracking features.
        </p>
      </div>
      <div className="feature-item">
        <img src={icon6} alt="Feature Icon 4" className="feature-icon" />
        <h3 className="feature-title">Global Scholarships and tie ups</h3>
        <p className="feature-description">
        opens up opportunities for students to access international education and financial aid
        </p>
      </div>
    </section>
  );
}

export default Features;
