import "./App.css";
import React from "react";
import Hello from "./Components/Todo.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Hello />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
