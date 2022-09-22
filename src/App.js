
import './App.css';


import React from 'react';
import Nav from './components/Nav/index.js';
import About from './components/About/index.js';
import Contact from './components/Contact/index.js';
import Portfolio from './components/Portfolio/index.js';
import Resume from './components/Resume/index.js';
import Footer from './components/Footer/index.js';

function App() {
  return (
    <main>
      <Nav />
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer />
     
    </main>
  );
}

export default App;
