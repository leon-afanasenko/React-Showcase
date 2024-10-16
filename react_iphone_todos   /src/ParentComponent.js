import React, { useState } from "react";
import NoteList from "./NoteList";

const ParentComponent = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Note 1", date: new Date() },
    { id: 2, text: "Note 2", date: new Date() },
  ]);
  const [selectedNotes, setSelectedNotes] = useState([]);

  // Функция для переключения выбора заметки
  const toggleNoteSelection = (noteId) => {
    setSelectedNotes((prevSelectedNotes) =>
      prevSelectedNotes.includes(noteId)
        ? prevSelectedNotes.filter((id) => id !== noteId)
        : [...prevSelectedNotes, noteId]
    );
  };

  const handleEditNote = (note) => {
    console.log("handleEditNote called with note:", note);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <NoteList
          notes={notes}
          onToggleNoteSelection={toggleNoteSelection} // Передача функции
          onEditNote={handleEditNote}
          selectedNotes={selectedNotes}
        />
      </div>
    </div>
  );
};

export default ParentComponent;
