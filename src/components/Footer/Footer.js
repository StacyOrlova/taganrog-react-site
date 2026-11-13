import React from 'react';
import './Footer.css';

function Footer() {
  return React.createElement(
    'footer',
    { className: 'modern-footer' },
    React.createElement(
      'div',
      { className: 'footer-content' },
      React.createElement('p', null, `© ${new Date().getFullYear()} Проект о Таганроге`),
    )
  );
}

export default Footer;