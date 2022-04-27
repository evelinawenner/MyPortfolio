import React, { useContext } from "react";
import { LanguageContext } from "../../globals/context/languageContext/LanguageContext";
import { Heading, MainHeading, P } from "../../globals/styledElements/Text";
import { Container } from "./LandingPageStyle";
import { Projects } from "./projects/Projects";

export const LandingPage = () => {
  const lang = useContext(LanguageContext);
  return (
    <Container>
      <span className="frontend">FRONTE</span>
      <span className="developer">ND DEVELOPER</span>
      <div className="hero">
        <MainHeading>EVELINA</MainHeading>
        <MainHeading>WENNER</MainHeading>
        <Heading
          style={{ fontSize: "3rem", fontWeight: "600", marginTop: "20px" }}
        >
          {lang.language.language.portfolio}
        </Heading>
      </div>
      <Projects />
    </Container>
  );
};
