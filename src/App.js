import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import NoteList from "./Components/NoteList";

function App() {
  const [notes, Setnotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "01/01/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "02/01/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "03/01/2023",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "03/01/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newnote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newnotes = [...notes, newnote];
    Setnotes(newnotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    Setnotes(newNotes)
  };

  return (
    <div className="container">
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
