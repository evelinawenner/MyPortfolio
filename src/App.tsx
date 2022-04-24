import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/pages/landingPage/LandingPage";
import ScrollToTop from "./components/globals/ScrollToTop";

function App() {
  return (
    //Page components here
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
