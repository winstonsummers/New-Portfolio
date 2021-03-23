import React, { Component } from "react";
import "./index.css";

//these are my components
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Nav from "./components/Nav";

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
