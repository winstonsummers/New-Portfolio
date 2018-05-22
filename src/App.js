import React, { Component } from 'react';
import './index.css';

//these are my components
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Nav from './components/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
