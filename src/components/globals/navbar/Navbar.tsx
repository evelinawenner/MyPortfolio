import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext/LanguageContext";
import { LangToggle } from "./langToggle/langToggle";
import { Container } from "./NavbarStyle";

export const Navbar = () => {
  const lang = useContext(LanguageContext);
  return (
    <Container>
      <section className="nav-links">
        <Link to="/">{lang.language.language.home}</Link>
        <Link to="/about">{lang.language.language.about}</Link>
        <Link to="/guestbook">{lang.language.language.guest_book}</Link>
      </section>
      <section className="lang">
        <LangToggle />
      </section>
    </Container>
  );
};
