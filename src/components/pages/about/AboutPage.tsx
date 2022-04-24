import React from "react";
import { AboutContainer } from "./AboutPageStyle";
import myself from "../../globals/assets/myself.jpg";
import { P } from "../../globals/styledElements/Text";

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
            <P style={{ marginBottom: 20, fontSize: 30, fontWeight: 600 }}>
              Hi. This is me. A frontend developer to be. <br />
              Hire me?
            </P>
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
          <P></P>
          <P></P>
          <P></P>
        </section>
        <section className="techstack"></section>
      </section>
    </AboutContainer>
  );
};
