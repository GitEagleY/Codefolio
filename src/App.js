import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
