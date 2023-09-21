import React from 'react';
import './Header.css';
import logo from '../assets/WhatsApp Image 2023-09-21 at 10.15.44.jpg';

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
        <div className="logo">
          <img src={logo} alt='' style={logoStyle}/>
          <p className="tagline">Careerudaan: Where Ambitions Take Flight</p>
        </div>
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

const logoStyle = {
  width: '100px', // Adjust the width as needed
  height: 'auto', // Maintain aspect ratio
  borderRadius: '50%',
};

export default Header;
