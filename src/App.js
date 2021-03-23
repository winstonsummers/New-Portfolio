import React from "react";
import "./index.css";

//these are my components
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Nav from "./components/Nav";

export default () => {
  return (
    <div className="wrapper">
      <Nav />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};
