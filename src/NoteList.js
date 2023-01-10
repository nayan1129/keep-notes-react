import React from "react";
import AddNotes from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, handleAddNote, handleDleteNote }) => {
  return (
    <>
      <div className="notes-nav">
        <h1>Keep Notes</h1>
      </div>
      <div className="notes-list">
        {notes.map((note) => {
          return (
            <Note
              id={note.id}
              text={note.text}
              date={note.date}
              handleDleteNote={handleDleteNote}
            />
          );
        })}
        <AddNotes handleAddNote={handleAddNote} />
      </div>
    </>
  );
};

export default NoteList;
