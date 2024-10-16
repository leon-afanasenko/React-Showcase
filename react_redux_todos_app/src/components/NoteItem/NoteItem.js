import React from "react";

const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <button className="delete-note-button" onClick={onDelete}>
        Удалить
      </button>
    </div>
  );
};

export default NoteItem;
