import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(Header, null),
    React.createElement(MainContent, null),
    React.createElement(Footer, null)
  );
}

export default App;