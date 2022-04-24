import SEjson from "./SE.json";
import ENjson from "./EN.json";

export interface ILanguageVariables {
  // Hero
  portfolio: string;
  // Navbar
  home: string;
  about: string;
  guest_book: string;
}

export const SE: ILanguageVariables = SEjson;
export const EN: ILanguageVariables = ENjson;
