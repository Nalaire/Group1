import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./Navibar";
import Home from "./Home";
import Weather from "./Weather";
import Recipe from "./Recipe";
import About from "./AboutUs";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
