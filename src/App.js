import React, { Component } from 'react';

//these are my components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import About from './components/About.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
