import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import About from './components/About'
import Card from './components/Card'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <About/>
    <Card/>
  </React.StrictMode>
);

reportWebVitals();
