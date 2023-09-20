import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  // Define FAQ items as an array of objects with questions and answers.
  const faqItems = [
    {
      question: 'What is the purpose of this app?',
      answer: 'Our app helps secondary-level students make informed career choices by providing personalized guidance, real-time job market insights, and skill development support.',
    },
    {
      question: 'How do I get started?',
      answer: 'To get started, sign up for an account, complete your profile, and start exploring personalized career recommendations and resources.',
    },
    {
      question: 'Is this service free?',
      answer: 'Yes, our basic services are free to use. However, we also offer premium features for users who want more in-depth career guidance.',
    },
    // Add more FAQ items as needed
  ];

  // Create state to track which FAQs are expanded (open) or collapsed (closed)
  const [expandedFAQs, setExpandedFAQs] = useState([]);

  // Function to toggle the FAQ item's state (expanded/collapsed)
  const toggleFAQ = (index) => {
    if (expandedFAQs.includes(index)) {
      // If it's already expanded, collapse it
      setExpandedFAQs(expandedFAQs.filter((item) => item !== index));
    } else {
      // If it's collapsed, expand it
      setExpandedFAQs([...expandedFAQs, index]);
    }
  };

  return (
    <section className="faqs" id="faq">
            <h2 className="section-heading">Frequently Asked Questions</h2>
      <div className="faq-items">
        {faqItems.map((item, index) => (
          <div className={`faq-item ${expandedFAQs.includes(index) ? 'open' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className={`arrow ${expandedFAQs.includes(index) ? 'open' : ''}`}></span>
            </div>
            <div className={`faq-answer ${expandedFAQs.includes(index) ? 'open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
