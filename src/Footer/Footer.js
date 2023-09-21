import React from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin, AiFillTwitterSquare, AiOutlineFacebook } from "react-icons/ai";
import './Footer.css';
import logo from "../assets/WhatsApp Image 2023-09-21 at 10.15.44.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Your Logo" style={logoStyle}/>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Career Udaan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

const logoStyle = {
  width: '100px', // Adjust the width as needed
  height: 'auto', // Maintain aspect ratio
  borderRadius: '50%',
};


export default Footer;
