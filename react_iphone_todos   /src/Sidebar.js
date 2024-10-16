import React from "react";
import styled from "styled-components";
import { FaStickyNote, FaPlus, FaTrashAlt } from "react-icons/fa";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #d0d0d5;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
`;

const NoteListContainer = styled.div`
  margin-bottom: 20px;
`;

const NoteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.isActive ? "#f0f0f5" : "transparent")};
  transition: background-color 0.3s;
  &:hover {
    background-color: #e1e1e6;
  }
`;

const NoteTitle = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: #f5c300;
  color: #333;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e1a300;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: #f00;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f7f7f9;
  }
`;

const Sidebar = ({
  notes,
  activeNoteId,
  onSelectNote,
  onAddNote,
  onDeleteNote,
}) => {
  return (
    <SidebarContainer>
      <Title>Notes</Title>
      <NoteListContainer>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            isActive={note.id === activeNoteId}
            onClick={() => onSelectNote(note.id)}
          >
            <FaStickyNote />
            <NoteTitle>{note.title}</NoteTitle>
          </NoteItem>
        ))}
      </NoteListContainer>
      <AddButton onClick={onAddNote}>
        <FaPlus /> Add Note
      </AddButton>
      {activeNoteId && (
        <DeleteButton onClick={() => onDeleteNote(activeNoteId)}>
          <FaTrashAlt /> Delete Note
        </DeleteButton>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
