import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNote, editNote } from "../../redux/actions/noteActions";

const NoteForm = ({ note }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setText(note.text);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      dispatch(
        editNote({
          ...note,
          title,
          text,
        })
      );
    } else {
      dispatch(
        addNote({
          id: Date.now(),
          title,
          text,
        })
      );
    }
    setTitle("");
    setText("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Note content"
        required
      />
      <button type="submit" className="save-note-button">
        {note ? "Edit Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
