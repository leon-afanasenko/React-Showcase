// src/NoteList.js
import React from "react";
import styled from "styled-components";

const NoteItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #555555;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
  position: relative;
  color: #eaeaea;
  cursor: pointer;
  justify-content: space-between;

  &.selected {
    background-color: #666666;
  }
  & > div {
    // Target the div containing the text and date
    display: flex;
    flex-direction: column; // Stack text and date vertically
    overflow: hidden; // Hide overflowing text
  }

  .note-text {
    text-overflow: ellipsis; // Add ellipsis (...) for truncated text
    white-space: nowrap; // Prevent text from wrapping
    overflow: hidden; // Ensure text is hidden if it overflows
  }
`;

const Checkbox = styled.input`
  margin-right: 12px;
`;

const EditButton = styled.button`
  background-color: #f39c12;
  border: none;
  color: #ffffff;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-left: 10px;

  &:hover {
    background-color: #e67e22;
    transform: scale(1.05);
  }

  &:active {
    background-color: #d35400;
    transform: scale(0.95);
  }
`;

const DateTime = styled.span`
  font-size: 12px;
  color: #888888;
  margin-left: 10px;
`;

const truncateText = (text, wordLimit = 5) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const NoteList = ({
  notes,
  onToggleNoteSelection,
  onEditNote,
  onOpenNote,
  selectedNotes,
}) => {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {notes.map((note) => {
        const noteDate = new Date(note.date);
        const formattedDate = noteDate.toLocaleDateString();
        const formattedTime = noteDate.toLocaleTimeString();

        return (
          <NoteItem
            key={note.id}
            onClick={() => onOpenNote(note)}
            className={selectedNotes.includes(note.id) ? "selected" : ""}
          >
            <Checkbox
              type="checkbox"
              checked={selectedNotes.includes(note.id)}
              onChange={() => onToggleNoteSelection(note.id)}
            />
            <div style={{ flex: 1 }}>
              <span className="note-text">{truncateText(note.text)} </span>
              <DateTime>
                {formattedDate} {formattedTime}
              </DateTime>
            </div>
            <EditButton
              onClick={(e) => {
                e.stopPropagation();
                onEditNote(note);
              }}
            >
              Edit
            </EditButton>
          </NoteItem>
        );
      })}
    </ul>
  );
};

export default NoteList;
