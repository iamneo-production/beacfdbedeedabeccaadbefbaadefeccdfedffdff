//Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>&copy; {currentYear} Your Name</div>
    </footer>
  );
};

export default Footer;