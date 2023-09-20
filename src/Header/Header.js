import React from 'react';
import './Header.css';

function Header() {
  // Function to scroll to a specific section when a menu item is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Your App Name</div>
        <ul className="menu">
          <li onClick={() => scrollToSection('hero')}>Home</li>
          <li onClick={() => scrollToSection('features')}>Features</li>
          <li onClick={() => scrollToSection('faq')}>FAQs</li>
          <li onClick={() => scrollToSection('blogs')}>Blogs</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
