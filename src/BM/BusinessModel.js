import React from 'react';
import './BusinessModel.css'; // Create a separate CSS file for styling

function BusinessModel() {
  return (
    <section className="business-model">
      <h2 className="section-heading">Our Business Model</h2> {/* Section Heading */}
      <div className="model-content">
        <div className="model-item">
          <h3>1. Freemium Model</h3>
          <p>Basic Free Access: Offer essential features like AI-based career recommendations, skill assessment, and access to general college admission information for free.</p>
          <p>Premium Subscription: Charge a subscription fee for premium features, such as detailed college admission prediction, real-time job market insights, personalized skill development plans, and direct access to career counselors.</p>
        </div>
        <div className="model-item">
          <h3>2. College Partnerships</h3>
          <p>Partner with colleges and universities to provide them with insights into potential applicants. Colleges can pay for access to student profiles that match their admission criteria, thus increasing their applicant pool.</p>
        </div>
        <div className="model-item">
          <h3>3. Career Services for Schools</h3>
          <p>Collaborate with schools to integrate your platform into their curriculum. Schools pay for access to career planning tools and counseling services for their students.</p>
        </div>
        <div className="model-item">
          <h3>4. Advertisements and Sponsorships</h3>
          <p>Display targeted advertisements from educational institutions, online courses, and related services on your platform.</p>
          <p>Partner with companies and organizations that want to sponsor educational content or offer scholarships to students.</p>
        </div>
        <div className="model-item">
          <h3>5. Data Analytics Services</h3>
          <p>Offer aggregated and anonymized data to educational institutions, government bodies, and corporations for market research and talent acquisition insights.</p>
        </div>
        <div className="model-item">
          <h3>6. Affiliate Marketing</h3>
          <p>Promote relevant products and services, such as test preparation materials, books, or online courses, and earn a commission for each successful referral or sale.</p>
        </div>
      </div>
    </section>
  );
}

export default BusinessModel;
