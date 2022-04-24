import React from "react";
import { MainHeading, P } from "../../globals/styledElements/Text";
import { Container } from "./LandingPageStyle";

export const LandingPage = () => {
  return (
    <Container>
      <div className="hero">
        <MainHeading>Evelina Wenner</MainHeading>
        <P>Portfolio</P>
      </div>
    </Container>
  );
};
