import React from 'react';
// import './Footer.css';
// import { FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="Footer text-center py-4 text-white">
      <p>Contact: 9060664922</p>
      <p>Address: #18, 1st cross, 1st Main, Muneshwara layout, Attached to Raghavendra Layout, Chikka Beguru, Bangalore 560068</p>
      <div className="SocialMedia">
        {/* <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp size="2em" /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size="2em" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size="2em" /></a> */}
      </div>
      <p>© 2024 Shri Thandaveshwara Nilaya. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
