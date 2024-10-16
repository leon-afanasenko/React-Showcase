import React, { useState } from "react";
import styled from "styled-components";

// Стили для контейнера деталей заметки
const DetailContainer = styled.div`
  background-color: #555555;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  color: #eaeaea;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

// Стили для кнопки закрытия
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  border: none;
  color: #ffffff;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }

  &:active {
    background-color: #b03a2e;
    transform: scale(0.95);
  }
`;

// Стили для кнопок сохранения и отмены
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

// Стили для кнопки
const ActionButton = styled.button`
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SaveButton = styled(ActionButton)`
  background-color: #f39c12;

  &:hover {
    background-color: #e67e22;
  }

  &:active {
    background-color: #d35400;
  }
`;

const CancelButton = styled(ActionButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }

  &:active {
    background-color: #b03a2e;
  }
`;

// Стили для текстового поля
const Input = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #555555;
  color: #eaeaea;
  min-height: 80px;
  max-height: 80vh;
  resize: vertical;
  overflow: auto;
  box-sizing: border-box;
`;

const NoteDetail = ({ note, onClose, onSave }) => {
  const [editNoteText, setEditNoteText] = useState(note ? note.text : "");

  if (!note) return null;

  const noteDate = new Date(note.date);
  const formattedDate = noteDate.toLocaleDateString();
  const formattedTime = noteDate.toLocaleTimeString();

  const handleSave = () => {
    onSave({ ...note, text: editNoteText });
  };

  return (
    <DetailContainer>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <h2>Note Details</h2>
      <Input
        value={editNoteText}
        onChange={(e) => setEditNoteText(e.target.value)}
      />
      <ButtonGroup>
        <SaveButton onClick={handleSave}>Save</SaveButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ButtonGroup>
      <div>
        <strong>Date:</strong> {formattedDate}, <strong>Time:</strong>{" "}
        {formattedTime}
      </div>
    </DetailContainer>
  );
};

export default NoteDetail;
