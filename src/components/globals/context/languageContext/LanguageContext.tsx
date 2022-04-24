import { SE, EN } from "./languages/LanguageInterface";
import React, { createContext, ReactNode, useState } from "react";

export const languages = {
  SE: {
    language: SE,
    name: "Svenska",
  },
  EN: {
    language: EN,
    name: "English",
  },
};

export const LanguageContext = createContext({
  language: languages.SE,
  setLang: (langCode: string) => {},
});

interface Iprops {
  children: ReactNode;
}
/* The purpose of this custom provider is to handle context logic that would be placed in app.tsx  */
/* in a separated file for structure */

/* It mainly handles setLang() ie the function for swapping language, which takes a language code (SE,EN)  */
/* and sets a state depending on the language code, which it then passes to the LanguageContext.Provider as a value, and then returns */

export const LanguageContextProvider = (props: Iprops) => {
  let defaultLanguage = languages.SE;
  let getDefault = localStorage.getItem("defaultLanguage");

  if (getDefault === "EN") {
    defaultLanguage = languages.EN;
  }
  const setLang = (langCode: string) => {
    let chosen = languages.SE;

    if (langCode === "EN") {
      localStorage.setItem("defaultLanguage", "EN");
      chosen = languages.EN;
    } else {
      localStorage.setItem("defaultLanguage", "SE");
      chosen = languages.SE;
    }
    setState({ ...state, language: chosen });
  };

  const initalValue = {
    language: defaultLanguage,
    setLang: setLang,
  };
  const [state, setState] = useState(initalValue);

  return (
    <LanguageContext.Provider value={state}>
      {props.children}
    </LanguageContext.Provider>
  );
};
