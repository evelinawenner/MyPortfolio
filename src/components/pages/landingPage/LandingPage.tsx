import React, { useContext } from "react";
import { LanguageContext } from "../../globals/context/languageContext/LanguageContext";
import { MainHeading, P } from "../../globals/styledElements/Text";
import { Container } from "./LandingPageStyle";

export const LandingPage = () => {
  const lang = useContext(LanguageContext);
  return (
    <Container>
      <div className="hero">
        <MainHeading>{lang.language.language.my_name}</MainHeading>
        <P>{lang.language.language.portfolio}</P>
      </div>
    </Container>
  );
};
