import React, { FormEvent, useContext, useState } from "react";
import { db } from "../../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { AddEntryContainer } from "./AddEntryStyle";
import { LanguageContext } from "../../../globals/context/languageContext/LanguageContext";
import { P } from "../../../globals/styledElements/Text";

export const AddEntry = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const lang = useContext(LanguageContext);

  const addEntry = async (e: FormEvent) => {
    const entryRef = collection(db, "entries");

    await addDoc(entryRef, { name: name, message: message });
    console.log("skickat gmn");
  };

  return (
    <AddEntryContainer>
      <form className="form" onSubmit={addEntry}>
        <label className="label">
          <P>{lang.language.language.name}</P>
        </label>
        <input
          className="name-input"
          type="text"
          defaultValue={name}
          onChange={(e) => setName(e.target.defaultValue)}
        ></input>
        <label className="label">
          <P>{lang.language.language.message}</P>
        </label>
        <input
          className="message-input"
          type="text"
          defaultValue={message}
          onChange={(e) => setMessage(e.target.defaultValue)}
        ></input>
        <button className="submit-button" type="submit">
          Skicka
        </button>
      </form>
    </AddEntryContainer>
  );
};
