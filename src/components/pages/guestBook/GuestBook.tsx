import React, { useContext } from "react";
import { LanguageContext } from "../../globals/context/languageContext/LanguageContext";
import { Heading, P } from "../../globals/styledElements/Text";
import { AddEntry } from "./entries/AddEntry";
import { Entries } from "./entries/GetEntries";
import { GuestBookContiner } from "./GuestBookStyle";

export const GuestBook = () => {
  const lang = useContext(LanguageContext);

  return (
    <GuestBookContiner>
      <Heading>{lang.language.language.guest_book}</Heading>
      <P>{lang.language.language.sry_what}</P>
      <AddEntry />
      <P className="entries-heading">{lang.language.language.lets_see}</P>
      <Entries />
    </GuestBookContiner>
  );
};
