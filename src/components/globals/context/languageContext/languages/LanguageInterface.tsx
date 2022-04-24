import SEjson from "./SE.json";
import ENjson from "./EN.json";

export interface ILanguageVariables {
  portfolio: string;
}

export const SE: ILanguageVariables = SEjson;
export const EN: ILanguageVariables = ENjson;
