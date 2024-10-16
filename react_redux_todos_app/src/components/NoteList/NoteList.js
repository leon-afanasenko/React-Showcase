import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";
import NoteForm from "../NoteForm/NoteForm";

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const [editingNote, setEditingNote] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEditClick = (note) => {
    setEditingNote(note);
    setIsFormVisible(true);
  };

  const handleAddNoteClick = () => {
    setEditingNote(null);
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setEditingNote(null);
  };

  return (
    <div>
      {isFormVisible && (
        <div>
          <NoteForm note={editingNote} />
          <button className="close-form-button" onClick={handleFormClose}>
            Close
          </button>
        </div>
      )}
      <button className="add-note-button" onClick={handleAddNoteClick}>
        Add Note
      </button>
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h2>{note.title}</h2>
          <p>{note.text}</p>
          <button
            className="edit-note-button"
            onClick={() => handleEditClick(note)}
          >
            Edit
          </button>
          <button
            className="delete-note-button"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
