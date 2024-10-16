// src/Note.js
import React from "react";
import styled from "styled-components";

const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #555555;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
  position: relative;
  cursor: pointer;

  &.selected {
    background-color: #666666;
  }
`;

const NoteText = styled.span`
  flex: 1;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  color: #eaeaea;
`;

const NoteDate = styled.div`
  font-size: 12px;
  color: #888888;
  margin-top: 5px;
`;

const Checkbox = styled.input`
  margin-right: 12px;
`;

const EditButton = styled.button`
  background-color: #3498db;
  border: none;
  color: #ffffff;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-right: 5px;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.02);
  }

  &:active {
    background-color: #1f77d2;
    transform: scale(0.98);
  }
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  border: none;
  color: #ffffff;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.02);
  }

  &:active {
    background-color: #b03a2e;
    transform: scale(0.98);
  }
`;

const Note = ({ note, onToggleSelection, onDelete, onEdit, isSelected }) => {
  const { text, done, date } = note;

  return (
    <NoteContainer
      className={isSelected ? "selected" : ""}
      onClick={onToggleSelection}
    >
      <Checkbox type="checkbox" checked={done} onChange={onToggleSelection} />
      <div style={{ flex: 1 }}>
        <NoteText done={done}>{text}</NoteText>
        <NoteDate>{date.toLocaleString()}</NoteDate>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <EditButton
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from toggling selection
            onEdit();
          }}
        >
          Edit
        </EditButton>
        <DeleteButton
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from toggling selection
            onDelete();
          }}
        >
          Delete
        </DeleteButton>
      </div>
    </NoteContainer>
  );
};

export default Note;
