import SEjson from "./SE.json";
import ENjson from "./EN.json";

export interface ILanguageVariables {
  // Hero
  portfolio: string;
  // Navbar
  home: string;
  about: string;
  guest_book: string;
  // About page
  intro: string;
  hire_me: string;
  education: string;
  yh_points: string;
  uni: string;
  uni_major: string;
  // Guest book
  sry_what: string;
  name: string;
  message: string;
}

export const SE: ILanguageVariables = SEjson;
export const EN: ILanguageVariables = ENjson;
