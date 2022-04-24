import React, { useContext } from "react";
import { AboutContainer } from "./AboutPageStyle";
import myself from "../../globals/assets/myself.jpg";
import { Heading, P } from "../../globals/styledElements/Text";
import { LanguageContext } from "../../globals/context/languageContext/LanguageContext";

export const AboutPage = () => {
  const lang = useContext(LanguageContext);

  return (
    <AboutContainer>
      <section className="introduction">
        <div className="intro-div">
          <img src={myself} alt="me" />
          <div className="intro-text">
            <Heading style={{ marginBottom: 20 }}>
              {lang.language.language.intro} <br />
              {lang.language.language.hire_me}
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
        <section className="techstack">
          <Heading style={{ marginBottom: 20 }}>Techstack</Heading>
          <div className="stack-container">
            <div className="tech-div">
              <P>HTML</P>
              <P>CSS</P>
              <P>SCSS</P>
              <P>Javascript</P>
              <P>jQuery</P>
            </div>
            <div className="tech-div">
              <P>Typescript</P>
              <P>React</P>
              <P>Angular</P>
              <P>NodeJS</P>
              <P>npm</P>
            </div>
            <div className="tech-div">
              <P>Express</P>
              <P>MongoDB</P>
              <P>Rest-API</P>
              <P>EJS</P>
              <P>CMS</P>
            </div>
          </div>
        </section>
      </section>
    </AboutContainer>
  );
};
