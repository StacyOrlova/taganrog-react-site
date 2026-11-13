import React from 'react';
import './Header.css';

function Header() {
  return React.createElement(
    'header',
    { className: 'hero-header' },
    React.createElement(
      'div',
      { className: 'hero-content' },
      React.createElement('h1', { className: 'gradient-text' }, 'Таганрог'),
      React.createElement('p', { className: 'hero-subtitle' }, 'Город, где великая история встречается с морским бризом')
    )
  );
}

export default Header;