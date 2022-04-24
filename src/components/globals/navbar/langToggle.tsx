import { useContext } from "react";
import {
  LanguageContext,
  languages,
} from "../context/languageContext/LanguageContext";
import SE from "../assets/sweden.png";
import EN from "../assets/united-kingdom.png";

export const LangToggle = () => {
  const lang = useContext(LanguageContext);

  return (
    <div>
      {languages.SE ? (
        <img src={EN} onClick={() => lang.setLang("EN")} />
      ) : (
        <img src={SE} onClick={() => lang.setLang("SE")} />
      )}
    </div>
  );
};
