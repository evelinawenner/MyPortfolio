import React from "react";
import { AboutContainer } from "./AboutPageStyle";
import myself from "../../globals/assets/myself.jpg";
import { Heading, P } from "../../globals/styledElements/Text";

export const AboutPage = () => {
  //Introduction
  //Education
  //Techstack
  //Experience
  return (
    <AboutContainer>
      <section className="introduction">
        <div className="intro-div">
          <img src={myself} alt="A picture of me" />
          <div className="intro-text">
            <Heading style={{ marginBottom: 20 }}>
              Hi. This is me. A frontend developer to be. <br />
              Hire me?
            </Heading>
            <P>
              Email: evelinawenner@gmail.com
              <br />
              Git: <a href="http://github.com/evelinawenner">evelinawenner</a>
              <br />
              Linkedin: <a href="http://linkedin.com">Evelina Wenner</a>
            </P>
          </div>
        </div>
      </section>
      <section className="row">
        <section className="education">
          <Heading>Education</Heading>
          <div className="edu-div">
            <P fontWeight="600">Medieinstitutet</P>
            <P>Frontend Developer, 400Yh-poäng</P>
          </div>
          <div className="edu-div">
            <P fontWeight="600">Örebro Universitet</P>
            <P>Medier, kommunikation & PR (design), 180hp</P>
          </div>
        </section>
        <section className="techstack"></section>
      </section>
    </AboutContainer>
  );
};
