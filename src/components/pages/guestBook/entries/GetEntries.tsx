import { collection, onSnapshot } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { LanguageContext } from "../../../globals/context/languageContext/LanguageContext";
import { Heading, P } from "../../../globals/styledElements/Text";
import { EntriesContainer } from "./GetEntriesStyle";

export const Entries = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const lang = useContext(LanguageContext);

  const getEntries = async () => {
    onSnapshot(
      collection(db, "entries"),

      (snapshot) =>
        setEntries(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getEntries();
    console.log("hej", entries);
  }, []);

  const entryList = entries.map((entry) => {
    console.log(entry);
    return (
      <li key={entry.id}>
        <P className="name">{entry.name}:</P>
        <P>{entry.message}</P>
      </li>
    );
  });
  return (
    <EntriesContainer>
      <ul>{entryList}</ul>
    </EntriesContainer>
  );
};
