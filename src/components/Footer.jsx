import React from 'react'
import ImpressumModal from './Impressum';
import Privacy from './Privicy';

const Footer = () => {
  return (
    <footer className="text-center text-gray-400 py-6">
      <p>&copy; 2025 Alexander Panske. All rights reserved.</p>
      <p>
        <ImpressumModal /> | <span> </span>
        <Privacy />
      </p>
    </footer>
  );
};

export default Footer;

