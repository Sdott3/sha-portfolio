
import './App.css';


import React from 'react';
import Nav from './components/Nav.js';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

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
