// src/App.js
import React, { useState, useEffect } from "react";
import NoteList from "./NoteList";
import styled from "styled-components";

// Основной контейнер приложения
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco",
    "Helvetica Neue", Arial, sans-serif;
  background-color: #2b2b2b;
`;

// Стили для боковой панели
const Sidebar = styled.div`
  width: 250px;
  background-color: #333333;
  padding: 20px;
  border-right: 2px solid #444444;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  box-sizing: border-box;
`;

// Стили для главного контента
const Main = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #444444;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// Стили для формы в полном экране
const FullScreenForm = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 250px);
  height: 100vh;
  background-color: #333333;
  padding: 20px;
  display: ${(props) => (props.$isEditing ? "block" : "none")};
  overflow: hidden;
  border-left: 2px solid #444444;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  z-index: 100;
  border: 1px solid transparent; /* Прозрачный бордер */
`;

// Стили для группы кнопок в верхней части экрана
const ButtonGroupTop = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonGroupTopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  background-color: #444444;
  border: 1px solid #555555;
  border-radius: 8px;
`;

// Стили для формы заметок
const NoteForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px; /* Убрали отступ сверху для кнопок */
`;

// Основные стили для кнопок
const SmallButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AddNoteButtonSmall = styled(SmallButton)`
  background-color: #f39c12;
  color: #ffffff;

  &:hover {
    background-color: #e67e22;
  }

  &:active {
    background-color: #d35400;
  }
`;

const DeleteNoteButtonSmall = styled(SmallButton)`
  background-color: #e74c3c;
  color: #ffffff;

  &:hover {
    background-color: #c0392b;
  }

  &:active {
    background-color: #b03a2e;
  }
`;

const SaveButton = styled(SmallButton)`
  background-color: #f39c12;
  color: #ffffff;
  border: 1px solid #e67e22;

  &:hover {
    background-color: #e67e22;
  }

  &:active {
    background-color: #d35400;
  }
`;

const CancelButton = styled(SmallButton)`
  background-color: #e74c3c;
  color: #ffffff;
  border: 1px solid #c0392b;

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
  min-height: 780px;
  max-height: 80vh;
  resize: vertical;
  overflow: auto;
  box-sizing: border-box;
`;

// Стили для поля поиска
const SearchInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #555555;
  color: #eaeaea;
  margin-bottom: 20px;
  width: calc(100% - 20px);
`;

// Основной компонент приложения
const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Загрузка заметок из localStorage при монтировании компонента
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const handleToggleNoteSelection = (id) => {
    setSelectedNotes((prevSelectedNotes) =>
      prevSelectedNotes.includes(id)
        ? prevSelectedNotes.filter((noteId) => noteId !== id)
        : [...prevSelectedNotes, id]
    );
  };

  const handleAddNote = () => {
    setCurrentNote({
      id: Date.now(),
      text: "",
      date: new Date(),
    });
    setIsEditing(true);
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
    setIsEditing(true);
  };

  const handleSaveNote = () => {
    if (currentNote) {
      setNotes((prevNotes) =>
        prevNotes.some((note) => note.id === currentNote.id)
          ? prevNotes.map((note) =>
              note.id === currentNote.id ? currentNote : note
            )
          : [...prevNotes, currentNote]
      );
      saveNotesToLocalStorage(notes);
      setIsEditing(false);
      setCurrentNote(null);
    }
  };

  const handleDeleteNotes = () => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => !selectedNotes.includes(note.id))
    );
    saveNotesToLocalStorage(notes);
    setSelectedNotes([]);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentNote(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    if (currentNote) {
      setCurrentNote({
        ...currentNote,
        text: e.target.value,
        date: new Date(),
      });
    }
  };

  const handleOpenNote = (note) => {
    setCurrentNote(note);
    setIsEditing(true);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppContainer>
      <Sidebar>
        <ButtonGroupTop>
          <AddNoteButtonSmall onClick={handleAddNote}>
            Add Note
          </AddNoteButtonSmall>
          <DeleteNoteButtonSmall
            onClick={handleDeleteNotes}
            disabled={selectedNotes.length === 0}
          >
            Delete Selected
          </DeleteNoteButtonSmall>
        </ButtonGroupTop>
        <SearchInput
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <NoteList
          notes={filteredNotes}
          onToggleNoteSelection={handleToggleNoteSelection}
          onEditNote={handleEditNote}
          onOpenNote={handleOpenNote}
          selectedNotes={selectedNotes}
        />
      </Sidebar>
      <Main>
        <FullScreenForm $isEditing={isEditing}>
          <ButtonGroupTopRight>
            <SaveButton onClick={handleSaveNote}>Save</SaveButton>
            <CancelButton onClick={handleCancelEdit}>Cancel</CancelButton>
          </ButtonGroupTopRight>
          <NoteForm>
            <Input
              value={currentNote?.text || ""}
              onChange={handleInputChange}
              placeholder="Write your note here..."
            />
          </NoteForm>
        </FullScreenForm>
      </Main>
    </AppContainer>
  );
};

export default App;
