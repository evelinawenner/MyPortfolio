import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./NavbarStyle";

export const Navbar = () => {
  return (
    <Container>
      <section className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/guestbook">Guest book</Link>
      </section>
    </Container>
  );
};
