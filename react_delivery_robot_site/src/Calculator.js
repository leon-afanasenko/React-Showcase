import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [fromFloor, setFromFloor] = useState("");
  const [toFloor, setToFloor] = useState("");
  const [fromApproach, setFromApproach] = useState(false);
  const [toApproach, setToApproach] = useState(false);
  const [fromElevator, setFromElevator] = useState(false);
  const [toElevator, setToElevator] = useState(false);

  const [itemCounts, setItemCounts] = useState({
    "Шкаф-купэ": "",
    Шкаф: "",
    Комод: "",
    "Комод (большой)": "",
    Тумба: "",
    "Тумба (большая)": "",
    "Шкаф соты": "",
    Стеллаж: "",
    Сервант: "",
    Полка: "",
    "Ящик настенный": "",
    "Книжный шкаф": "",
    "Обувная полка": "",
    "Обувная полка (большая)": "",
    "Вешалка напольная": "",
    "Вешалка настенная": "",
    // Мягкая мебель
    "Диван двухместный": "",
    "Диван трехместный": "",
    "Диван четырехместный": "",
    "Диван пятиместный": "",
    Кресло: "",
    Шезлонг: "",
    "Салон угловой": "",
    // Столы и стулья
    "Стол обеденный": "",
    "Стол обеденный (большой)": "",
    Стул: "",
    "Стул барный": "",
    "Барная стойка": "",
    "Рабочий стол": "",
    "Рабочий стол (большой)": "",
    "Письменный стол": "",
    Парта: "",
    "Журнальный стол": "",
    "Тумба под телевизор": "",
    "Тумба под телевизор (большая)": "",
    // Кровати и матрасы
    "Кровать двуспальная": "",
    "Матрас двуспальный": "",
    "Кровать односпальная": "",
    "Матрас односпальный": "",
    "Кроватка младенца": "",
    // Техника
    "Холодильник (маленький)": "",
    "Холодильник (стандарт)": "",
    "Холодильник (большой)": "",
    "Морозильная камера": "",
    "Стиральная машина": "",
    "Сушильная машина": "",
    "Посудомоечная машина": "",
    Плита: "",
    Духовка: "",
    "Плита с духовкой": "",
    "Микроволновая печь": "",
    Телевизор: "",
    Компьютер: "",
    Принтер: "",
    Тренажер: "",
    "Тренажер (большой)": "",
    // Дополнительные предметы
    Зеркало: "",
    Ковер: "",
    Торшер: "",
    Люстра: "",
    Бра: "",
    Ваза: "",
    Картина: "",
    "Часы настенные": "",
    Глобус: "",
    Аквариум: "",
    "Клетка для птиц": "",
    Когтеточка: "",
    "Лежак для животных": "",
    "Миска для животных": "",
    "Корзина для белья": "",
    "Гладильная доска": "",
    "Сушилка для белья": "",
    "Шкафчик для инструментов": "",
    Коробки: "",
  });

  const [kubi, setKubi] = useState("four");
  const [modalVisible, setModalVisible] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const servicePrices = {
    "Шкаф-купэ": { base: 100, slidingDoors: 25, assembly: 40, disassembly: 35 },
    Шкаф: { base: 80, assembly: 30, disassembly: 25 },
    Комод: { base: 40 },
    "Комод (большой)": { base: 60 },
    Тумба: { base: 25 },
    "Тумба (большая)": { base: 40 },
    "Шкаф соты": { four: 60, six: 80, eight: 100, ten: 150 },
    Стеллаж: { base: 70, assembly: 25, disassembly: 20 },
    Сервант: { base: 90, assembly: 35, disassembly: 30 },
    Полка: { base: 20, assembly: 10 },
    "Ящик настенный": { base: 15, assembly: 10 },
    "Книжный шкаф": { base: 90, assembly: 35 },
    "Обувная полка": { base: 20 },
    "Обувная полка (большая)": { base: 35 },
    "Вешалка напольная": { base: 30 },
    "Вешалка настенная": { base: 15, assembly: 5 },

    "Диван двухместный": { base: 80 },
    "Диван трехместный": { base: 120 },
    "Диван четырехместный": { base: 150, assembly: 50, disassembly: 40 },
    "Диван пятиместный": { base: 180, assembly: 60, disassembly: 50 },
    Кресло: { base: 40 },
    Шезлонг: { base: 30 },
    "Салон угловой": { base: 150, assembly: 40, disassembly: 30 },

    "Стол обеденный": { base: 45, assembly: 20, disassembly: 15 },
    "Стол обеденный (большой)": { base: 70, assembly: 30, disassembly: 25 },
    Стул: { base: 20 },
    "Стул барный": { base: 35 },
    "Барная стойка": { base: 110, assembly: 40, disassembly: 35 },
    "Рабочий стол": { base: 35, assembly: 15, disassembly: 10 },
    "Рабочий стол (большой)": { base: 55, assembly: 25, disassembly: 20 },
    "Письменный стол": { base: 50, assembly: 20, disassembly: 15 },
    Парта: { base: 40, assembly: 15, disassembly: 10 },
    "Журнальный стол": { base: 30, assembly: 10 },
    "Тумба под телевизор": { base: 30 },
    "Тумба под телевизор (большая)": { base: 50 },

    "Кровать двуспальная": { base: 60, assembly: 25, disassembly: 20 },
    "Матрас двуспальный": { base: 20 },
    "Кровать односпальная": { base: 50, assembly: 20, disassembly: 15 },
    "Матрас односпальный": { base: 15 },
    "Кроватка младенца": { base: 40, assembly: 15, disassembly: 10 },

    "Холодильник (маленький)": { base: 40 },
    "Холодильник (стандарт)": { base: 60 },
    "Холодильник (большой)": { base: 80 },
    "Морозильная камера": { base: 70 },
    "Стиральная машина": { base: 50 },
    "Сушильная машина": { base: 45 },
    "Посудомоечная машина": { base: 50 },
    Плита: { base: 40 },
    Духовка: { base: 30 },
    "Плита с духовкой": { base: 70 },
    "Микроволновая печь": { base: 20 },
    Телевизор: { base: 30 },
    Компьютер: { base: 15 },
    Принтер: { base: 10 },
    Тренажер: { base: 50 },
    "Тренажер (большой)": { base: 80 },

    Зеркало: { base: 20 },
    Ковер: { base: 30 },
    Торшер: { base: 25 },
    Люстра: { base: 40 },
    Бра: { base: 15 },
    Ваза: { base: 10 },
    Картина: { base: 15 },
    "Часы настенные": { base: 15 },
    Глобус: { base: 20 },
    Аквариум: { base: 30 },
    "Клетка для птиц": { base: 25 },
    Когтеточка: { base: 15 },
    "Лежак для животных": { base: 20 },
    "Миска для животных": { base: 5 },
    "Корзина для белья": { base: 15 },
    "Гладильная доска": { base: 20 },
    "Сушилка для белья": { base: 25 },
    "Шкафчик для инструментов": { base: 55 },

    Коробки: { base: 5 },
  };

  const calculateMultiplier = () => {
    let floorMultiplier = 1;

    if (!fromElevator) {
      floorMultiplier += Math.abs(fromFloor) * 0.08;
    }

    if (!toElevator) {
      floorMultiplier += Math.abs(toFloor) * 0.08;
    }

    if (fromApproach) {
      floorMultiplier += 0.08;
    }

    if (toApproach) {
      floorMultiplier += 0.08;
    }

    return floorMultiplier;
  };

  const calculateItemCost = (itemName, quantity) => {
    let itemCost = 0;
    const itemPrice = servicePrices[itemName];

    if (itemPrice) {
      itemCost += itemPrice.base * (quantity || 0);

      if (itemPrice.slidingDoors) {
        itemCost += itemPrice.slidingDoors * (quantity || 0);
      }

      if (itemName === "Шкаф соты" && itemCounts["Шкаф соты"] > 0) {
        itemCost += servicePrices[itemName][kubi] * (quantity || 0);
      }
    }

    return itemCost;
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    const floorMultiplier = calculateMultiplier();

    Object.keys(itemCounts).forEach((key) => {
      if (itemCounts[key] !== "") {
        const quantity = Number(itemCounts[key]);
        totalCost += calculateItemCost(key, quantity);
      }
    });

    // Применение скидок
    if (totalCost > 5000) {
      totalCost *= 0.9;
    }

    totalCost *= floorMultiplier;

    setTotalCost(totalCost);
  };

  const handleItemChange = (event) => {
    const { name, value } = event.target;
    setItemCounts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCalculateClick = () => {
    calculateTotalCost();
  };
  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="calculator">
      <h1>Калькулятор стоимости переезда</h1>

      <h2>Информация об адресах</h2>
      <div className="floor-info">
        <div>
          <label htmlFor="fromFloor">Этаж начала:</label>
          <input
            type="number"
            id="fromFloor"
            value={fromFloor}
            onChange={(e) => setFromFloor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="toFloor">Этаж конца:</label>
          <input
            type="number"
            id="toFloor"
            value={toFloor}
            onChange={(e) => setToFloor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fromElevator">Нет лифта на начальном этаже?</label>
          <input
            type="checkbox"
            id="fromElevator"
            checked={fromElevator}
            onChange={() => setFromElevator(!fromElevator)}
          />
        </div>
        <div>
          <label htmlFor="toElevator">Нет лифта на конечном этаже?</label>
          <input
            type="checkbox"
            id="toElevator"
            checked={toElevator}
            onChange={() => setToElevator(!toElevator)}
          />
        </div>
        <div>
          <label htmlFor="fromApproach">Нет подхода на начальном этаже?</label>
          <input
            type="checkbox"
            id="fromApproach"
            checked={fromApproach}
            onChange={() => setFromApproach(!fromApproach)}
          />
        </div>
        <div>
          <label htmlFor="toApproach">Нет подхода на конечном этаже?</label>
          <input
            type="checkbox"
            id="toApproach"
            checked={toApproach}
            onChange={() => setToApproach(!toApproach)}
          />
        </div>
      </div>

      <h2>Предметы для перевозки</h2>
      <div className="item-inputs">
        {Object.keys(itemCounts).map((item) => (
          <div key={item}>
            <label htmlFor={item}>{item}:</label>
            <input
              type="number"
              id={item}
              name={item}
              value={itemCounts[item]}
              onChange={handleItemChange}
            />
          </div>
        ))}
      </div>

      <h2>Дополнительные опции</h2>
      <div className="item-inputs">
        <div>
          <label htmlFor="kubi">Количество ячеек в шкафу "соты":</label>
          <select
            id="kubi"
            value={kubi}
            onChange={(e) => setKubi(e.target.value)}
          >
            <option value="four">4</option>
            <option value="six">6</option>
            <option value="eight">8</option>
            <option value="ten">10</option>
          </select>
        </div>
      </div>

      <button onClick={handleCalculateClick}>Рассчитать стоимость</button>

      <div className="total-cost">
        <h2>Итоговая стоимость: {totalCost.toFixed(2)} ₪ .</h2>
      </div>

      <button onClick={handleModalToggle}>Подробности</button>

      {modalVisible && (
        <div className="modal">
          <h2>Подробности расчета</h2>
          <p>
            Обратите внимание, что стоимость может варьироваться в зависимости
            от конкретных условий и требований. Рассчитанная стоимость включает
            в себя базовые расценки и дополнительные услуги, если они были
            выбраны.
          </p>
          <button onClick={handleModalToggle}>Закрыть</button>
        </div>
      )}
    </div>
  );
};

export default Calculator;
