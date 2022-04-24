import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/pages/landingPage/LandingPage";
import { AboutPage } from "./components/pages/about/AboutPage";
import ScrollToTop from "./components/globals/ScrollToTop";
import { LanguageContextProvider } from "./components/globals/context/languageContext/LanguageContext";
import { Navbar } from "./components/globals/navbar/Navbar";
import { GuestBook } from "./components/pages/guestBook/GuestBook";

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
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutPage />
              </>
            }
          />
          <Route
            path="/guestbook"
            element={
              <>
                <Navbar />
                <GuestBook />
              </>
            }
          />
        </Routes>
      </Router>
    </LanguageContextProvider>
  );
}

export default App;
