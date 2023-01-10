import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date,handleDleteNote  }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-note"
          onClick={() =>handleDleteNote(id)}
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
