import React from 'react';
import './Features.css';

import icon1 from '../assets/—Pngtree—career_3634495.png';
import icon2 from '../assets/Labor-market-analysis.webp';
import icon3 from '../assets/Evaluating-Candidates-Through-Skills-Assessment-thumb-1.png';
import icon4 from '../assets/pngtree-social-network-png-image_5413579.jpg';
import icon5 from '../assets/pngtree-counseling-on-mental-health-problems-and-flat-illustration-problems-png-image_6855458.png'

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
        <h3 className="feature-title">Real-time Job Market Insights</h3>
        <p className="feature-description">
          Stay updated with the latest job market trends, salary expectations, and skill demands.
        </p>
      </div>
      <div className="feature-item">
        <img src={icon3} alt="Feature Icon 3" className="feature-icon" />
        <h3 className="feature-title">Skill Assessment and Development</h3>
        <p className="feature-description">
          Assess your skills and get personalized plans to enhance your capabilities for your chosen career path.
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
        <h3 className="feature-title">Networking Opportunities</h3>
        <p className="feature-description">
          Connect with professionals and mentors in your desired industry to gain valuable insights and guidance.
        </p>
      </div>
    </section>
  );
}

export default Features;
