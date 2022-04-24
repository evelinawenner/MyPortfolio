import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext/LanguageContext";
import SE from "../../assets/sweden.png";
import EN from "../../assets/united-kingdom.png";
import { Container } from "./langToggleStyle";

export const LangToggle = () => {
  const lang = useContext(LanguageContext);

  return (
    <Container>
      <img
        src={SE}
        alt="swedish language icon"
        onClick={() => lang.setLang("SE")}
      />
      <img
        src={EN}
        alt="english language icon"
        onClick={() => lang.setLang("EN")}
      />
    </Container>
  );
};
