import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/pages/landingPage/LandingPage";
import ScrollToTop from "./components/globals/ScrollToTop";
import { LanguageContextProvider } from "./components/globals/context/languageContext/LanguageContext";
import { Navbar } from "./components/globals/navbar/Navbar";

function App() {
  return (
    <LanguageContextProvider>
      {/* Page components here */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <LandingPage />
              </>
            }
          />
        </Routes>
      </Router>
    </LanguageContextProvider>
  );
}

export default App;
