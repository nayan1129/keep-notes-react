import React, { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
  const [noteText, SetNoteText] = useState("");

  const handleChange = (e) => {
    SetNoteText(e.target.value);
  };
  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
        handleAddNote(noteText)
        SetNoteText('')
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="8"
        rows="10"
        value={noteText}
        placeholder="Type to add a note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
