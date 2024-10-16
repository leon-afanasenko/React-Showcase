// src/NoteEditor.js
import React from "react";
import styled from "styled-components";

const NoteEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SaveButton = styled(Button)`
  background-color: #2ecc71;

  &:hover {
    background-color: #27ae60;
  }

  &:active {
    background-color: #1e8449;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }

  &:active {
    background-color: #b03a2e;
  }
`;

const NoteEditor = ({ note, onSave, onCancel, onChange }) => {
  return (
    <NoteEditorContainer>
      <textarea
        value={note.text}
        onChange={(e) => onChange(e.target.value)}
        rows="10"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          backgroundColor: "#444444",
          color: "#eaeaea",
          resize: "vertical",
        }}
      />
      <ButtonGroup>
        <SaveButton onClick={() => onSave(note)}>Save</SaveButton>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </ButtonGroup>
    </NoteEditorContainer>
  );
};

export default NoteEditor;
