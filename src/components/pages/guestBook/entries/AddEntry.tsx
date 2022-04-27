import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { AddEntryContainer } from "./AddEntryStyle";
import { LanguageContext } from "../../../globals/context/languageContext/LanguageContext";
import { P } from "../../../globals/styledElements/Text";

export const AddEntry = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [entry, setEntry] = useState([])
  const entryRef = collection(db, "entries");
  const lang = useContext(LanguageContext);

  const addEntry = async (e: any) => {
    e.preventDefault();
    console.log("within function", name, message);
    try {
      await addDoc(entryRef, {
        name: name,
        message: message,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(name, message);
  }, [name, message]);

  // const addDog = async () => {
  //   if (!currUser) return;
  //   const dogRef = collection(db, "users", currUser.uid, "dogs");

  //   await addDoc(dogRef, { name: dogName, breed: dogBreed, weight: dogWeight });
  //   console.log("dog", dogName, "added");
  // };

  return (
    <AddEntryContainer>
      <form className="form">
        <label className="label">
          <P>{lang.language.language.name}</P>
        </label>
        <input
          className="name-input"
          type="text"
          required
          defaultValue={name}
          onChange={(e) => setName(() => e.target.value)}
        ></input>
        <label className="label">
          <P>{lang.language.language.message}</P>
        </label>
        <textarea
          className="message-input"
          required
          defaultValue={message}
          onChange={(e) => setMessage(() => e.target.value)}
        ></textarea>
        <button className="submit-button" type="submit" onClick={addEntry}>
          Skicka
        </button>
      </form>
    </AddEntryContainer>
  );
};
