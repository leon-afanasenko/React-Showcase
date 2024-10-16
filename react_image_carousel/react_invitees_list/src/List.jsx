import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Іванна", age: 20, talent: "Вокал" },
    { id: 2, name: "Марко", age: 22, talent: "Брейк-данс" },
    { id: 3, name: "Олеся", age: 21, talent: "Игра на бандуре" },
    { id: 4, name: "Назар", age: 19, talent: "Живопись песком" },
    { id: 5, name: "Дарина", age: 23, talent: "Спортивная гимнастика" },
    { id: 6, name: "Гліб", age: 24, talent: "Иллюзионизм" },
    { id: 7, name: "Дмитро", age: 18, talent: "Рэп" },
    { id: 8, name: "Ганна", age: 20, talent: "Художественное слово" },
    { id: 9, name: "Сергій", age: 21, talent: "Стендап" },
    { id: 10, name: "Оксана", age: 26, talent: "Народный вокал" },
    { id: 11, name: "Тарас", age: 28, talent: "Игра на скрипке" },
    { id: 12, name: "Софія", age: 22, talent: "Оперное пение" },
    { id: 13, name: "Максим", age: 17, talent: "Паркур" },
    { id: 14, name: "Ольга", age: 25, talent: "Вышивка шелком" },
    { id: 15, name: "Роман", age: 29, talent: "Кулинария" },
    { id: 16, name: "Катерина", age: 21, talent: "Дизайн одежды" },
    { id: 17, name: "Андрій", age: 23, talent: "Beatbox" },
    { id: 18, name: "Вікторія", age: 19, talent: "Балет" },
    { id: 19, name: "Богдан", age: 27, talent: "Фотография" },
    { id: 20, name: "Юлія", age: 24, talent: "Йога" },
    { id: 21, name: "Павло", age: 20, talent: "Резьба по дереву" },
    { id: 22, name: "Надія", age: 22, talent: "Писательство" },
    { id: 23, name: "Артем", age: 18, talent: "Граффити" },
    { id: 24, name: "Марина", age: 26, talent: "Дизайн интерьеров" },
    { id: 25, name: "Денис", age: 29, talent: "Фокусы" },
    { id: 26, name: "Ірина", age: 21, talent: "Флористика" },
    { id: 27, name: "Олег", age: 23, talent: "Игра на аккордеоне" },
    { id: 28, name: "Валентина", age: 19, talent: "Конный спорт" },
    { id: 29, name: "Руслан", age: 27, talent: "Песочная анимация" },
    { id: 30, name: "Аліна", age: 24, talent: "Визаж" },
    { id: 31, name: "Євген", age: 20, talent: "Экстремальное вождение" },
    { id: 32, name: "Світлана", age: 22, talent: "Создание украшений" },
    { id: 33, name: "Ігор", age: 18, talent: "Паркур" },
    { id: 34, name: "Людмила", age: 26, talent: "Кондитерское искусство" },
    { id: 35, name: "Владислав", age: 29, talent: "Игра на саксофоне" },
    { id: 36, name: "Наталія", age: 21, talent: "Дизайн ландшафта" },
    { id: 37, name: "Олександр", age: 23, talent: "Битбокс" },
    { id: 38, name: "Маргарита", age: 19, talent: "Современные танцы" },
    { id: 39, name: "Кирило", age: 27, talent: "Видеомонтаж" },
    { id: 40, name: "Яна", age: 24, talent: "Акробатика" },
    { id: 41, name: "Антон", age: 20, talent: "Игра на фортепиано" },
    { id: 42, name: "Вероніка", age: 22, talent: "Живопись маслом" },
    { id: 43, name: "Вадим", age: 18, talent: "Рэп-баттлы" },
    { id: 44, name: "Тетяна", age: 26, talent: "Выпечка хлеба" },
    { id: 45, name: "Микола", age: 29, talent: "Фокусы с животными" },
    { id: 46, name: "Анастасія", age: 21, talent: "Создание бижутерии" },
    { id: 47, name: "Данило", age: 23, talent: "Игра на гитаре" },
    { id: 48, name: "Злата", age: 19, talent: "Синхронное плавание" },
    { id: 49, name: "Арсеній", age: 27, talent: "Световое шоу" },
    { id: 50, name: "Єлизавета", age: 24, talent: "Дизайн одежды" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPeople = people.filter((person) => {
    const searchById = person.id.toString().includes(searchTerm);
    const searchByName = person.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return searchById || searchByName;
  });

  return (
    <div className="list-container">
      <h1>Список приглашенных</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск по имени или ID"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ul className="people-list">
        {filteredPeople.map((person) => (
          <li
            key={person.id}
            className={`list-item ${
              searchTerm.toString() === person.id.toString()
                ? "highlighted"
                : ""
            }`}
          >
            <span className="person-info">
              {person.id}. {person.name}, {person.age} лет,{" "}
              <strong>Талант:</strong> {person.talent}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(person.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
