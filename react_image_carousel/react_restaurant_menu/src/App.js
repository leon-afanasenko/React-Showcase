import React, { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import "./App.css";

const menuItems = [
  // Main Courses
  {
    id: 1,
    name: "Бургер 'Сытный Друг'",
    description: "Сочный говяжий бифштекс, свежие овощи и ароматный сыр.",
    price: 5.99,
    category: "Main Courses",
  },
  {
    id: 2,
    name: "Пицца 'Пепперони Фест'",
    description:
      "Классика итальянской кухни - пицца с ароматной пепперони и тянущимся сыром.",
    price: 10.99,
    category: "Main Courses",
  },
  {
    id: 3,
    name: "Суши 'Филадельфия'",
    description:
      "Нежные кусочки лосося, сливочный сыр и ароматный рис - классика японской кухни.",
    price: 12.99,
    category: "Main Courses",
  },
  {
    id: 4,
    name: "Паста 'Карбонара'",
    description:
      "Итальянская классика с ароматным беконом, сыром пармезан и нежным соусом.",
    price: 9.99,
    category: "Main Courses",
  },
  {
    id: 5,
    name: "Салат 'Цезарь' с курицей",
    description: "Классический салат Цезарь с курицей.",
    price: 7.99,
    category: "Main Courses",
  },
  {
    id: 6,
    name: "Салат 'Греческий'",
    description: "Освежающий салат с сыром фета, овощами и маслинами.",
    price: 6.99,
    category: "Main Courses",
  },
  // Appetizers
  {
    id: 7,
    name: "Салат 'Витаминный Заряд'",
    description: "Свежие овощи и зелень.",
    price: 4.99,
    category: "Appetizers",
  },
  {
    id: 8,
    name: "Картофель фри 'Хрустящая Улыбка'",
    description: "Золотистый картофель фри.",
    price: 3.0,
    category: "Appetizers",
  },
  {
    id: 9,
    name: "Куриные крылышки 'Острые огоньки'",
    description: "Острые куриные крылышки.",
    price: 6.99,
    category: "Appetizers",
  },
  {
    id: 10,
    name: "Луковые кольца 'Золотистые завитки'",
    description: "Хрустящие луковые кольца в панировке.",
    price: 4.5,
    category: "Appetizers",
  },
  // Drinks
  {
    id: 11,
    name: "Коктейль 'Фруктовый Взрыв'",
    description: "Микс тропических фруктов и ледяной свежести.",
    price: 3.99,
    category: "Drinks",
  },
  {
    id: 12,
    name: "Чай 'Зеленый Дракон'",
    description: "Ароматный зеленый чай с жасмином.",
    price: 2.99,
    category: "Drinks",
  },
  {
    id: 13,
    name: "Кофе 'Американо'",
    description: "Классический черный кофе.",
    price: 2.5,
    category: "Drinks",
  },
  {
    id: 14,
    name: "Капучино",
    description: "Нежный кофе с молочной пенкой.",
    price: 3.5,
    category: "Drinks",
  },
  {
    id: 15,
    name: "Сок 'Апельсиновый Фреш'",
    description: "Свежевыжатый апельсиновый сок.",
    price: 3.0,
    category: "Drinks",
  },
  // Desserts
  {
    id: 16,
    name: "Торт 'Шоколадный Грех'",
    description: "Богатый шоколадный торт с мягким кремом.",
    price: 5.5,
    category: "Desserts",
  },
  {
    id: 17,
    name: "Мороженое 'Ванильное Счастье'",
    description: "Классическое ванильное мороженое.",
    price: 4.0,
    category: "Desserts",
  },
  {
    id: 18,
    name: "Пирожное 'Фруктовый Вечер'",
    description: "Легкое пирожное с фруктовым наполнителем.",
    price: 3.5,
    category: "Desserts",
  },
  {
    id: 19,
    name: "Чизкейк 'Нью-Йорк'",
    description: "Классический чизкейк с ягодным соусом.",
    price: 6.0,
    category: "Desserts",
  },
  {
    id: 20,
    name: "Крем-брюле 'Французская Сказка'",
    description: "Десерт с карамелизированной корочкой и нежным кремом.",
    price: 5.99,
    category: "Desserts",
  },
  // Shakes
  {
    id: 21,
    name: "Молочный коктейль 'Шоколадный Вкус'",
    description: "Кремовый молочный коктейль с шоколадом.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 22,
    name: "Молочный коктейль 'Ванильная Сказка'",
    description: "Ванильный молочный коктейль с кусочками печенья.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 23,
    name: "Молочный коктейль 'Ягодное Наслаждение'",
    description: "Смесь ягод с молоком и мороженым.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 24,
    name: "Молочный коктейль 'Карамельный Облако'",
    description: "Карамельный молочный коктейль с взбитыми сливками.",
    price: 4.5,
    category: "Shakes",
  },
  // Alcohol
  {
    id: 25,
    name: "Пиво 'Лагер'",
    description: "Освежающее пиво с легким вкусом.",
    price: 3.5,
    category: "Alcohol",
  },
  {
    id: 26,
    name: "Вино 'Красное Каберне'",
    description: "Плотное красное вино с насыщенным вкусом.",
    price: 6.0,
    category: "Alcohol",
  },
  {
    id: 27,
    name: "Вино 'Белое Шардоне'",
    description: "Свежее белое вино с фруктовыми нотками.",
    price: 6.0,
    category: "Alcohol",
  },
  {
    id: 28,
    name: "Коктейль 'Мохито'",
    description: "Освежающий коктейль с мятой и лаймом.",
    price: 5.0,
    category: "Alcohol",
  },
  {
    id: 29,
    name: "Коктейль 'Маргарита'",
    description: "Классическая маргарита с солью и лаймом.",
    price: 5.0,
    category: "Alcohol",
  },
  // Additional items
  // Main Courses
  {
    id: 30,
    name: "Стейк 'Рибай'",
    description: "Сочный стейк рибай с гарниром.",
    price: 14.99,
    category: "Main Courses",
  },
  {
    id: 31,
    name: "Бургер 'Чизбургер'",
    description: "Классический чизбургер с сырами и овощами.",
    price: 6.99,
    category: "Main Courses",
  },
  {
    id: 32,
    name: "Лазанья 'Итальянская'",
    description: "Лазанья с мясом и соусом бешамель.",
    price: 11.99,
    category: "Main Courses",
  },
  {
    id: 33,
    name: "Суп 'Томатный'",
    description: "Томатный суп с базиликом.",
    price: 5.49,
    category: "Main Courses",
  },
  {
    id: 34,
    name: "Фахитас 'Куриные'",
    description: "Куриные фахитас с овощами и соусами.",
    price: 12.49,
    category: "Main Courses",
  },
  // Appetizers
  {
    id: 35,
    name: "Хумус 'Острый'",
    description: "Хумус с остринкой и оливковым маслом.",
    price: 5.0,
    category: "Appetizers",
  },
  {
    id: 36,
    name: "Гуакамоле 'Домашнее'",
    description: "Свежий гуакамоле с чипсами из кукурузы.",
    price: 5.5,
    category: "Appetizers",
  },
  {
    id: 37,
    name: "Брускетта 'С Помидорами'",
    description: "Брускетта с помидорами и базиликом.",
    price: 4.0,
    category: "Appetizers",
  },
  {
    id: 38,
    name: "Капрезе 'Сырный'",
    description: "Салат капрезе с моцареллой и помидорами.",
    price: 4.5,
    category: "Appetizers",
  },
  {
    id: 39,
    name: "Креветки 'На Гриле'",
    description: "Креветки на гриле с чесночным соусом.",
    price: 7.0,
    category: "Appetizers",
  },
  // Drinks
  {
    id: 40,
    name: "Лимонад 'Цитрусовый'",
    description: "Освежающий цитрусовый лимонад.",
    price: 3.5,
    category: "Drinks",
  },
  {
    id: 41,
    name: "Смузи 'Мангостин'",
    description: "Смузи из мангостина с медом.",
    price: 4.0,
    category: "Drinks",
  },
  {
    id: 42,
    name: "Горячий шоколад",
    description: "Горячий шоколад с маршмеллоу.",
    price: 3.5,
    category: "Drinks",
  },
  {
    id: 43,
    name: "Эспрессо",
    description: "Крепкий эспрессо.",
    price: 2.0,
    category: "Drinks",
  },
  {
    id: 44,
    name: "Латте 'Ванильный'",
    description: "Латте с ароматом ванили.",
    price: 3.8,
    category: "Drinks",
  },
  // Desserts
  {
    id: 45,
    name: "Торт 'Морковный'",
    description: "Морковный торт с орехами.",
    price: 5.5,
    category: "Desserts",
  },
  {
    id: 46,
    name: "Кексы 'Шоколадные'",
    description: "Шоколадные кексы с шоколадной крошкой.",
    price: 4.0,
    category: "Desserts",
  },
  {
    id: 47,
    name: "Пудинг 'Рисовый'",
    description: "Рисовый пудинг с корицей.",
    price: 4.5,
    category: "Desserts",
  },
  {
    id: 48,
    name: "Суфле 'Вишневое'",
    description: "Вишневое суфле с ванильным соусом.",
    price: 5.0,
    category: "Desserts",
  },
  {
    id: 49,
    name: "Паннакотта 'Классическая'",
    description: "Паннакотта с ягодным компотом.",
    price: 5.99,
    category: "Desserts",
  },
  // Shakes
  {
    id: 50,
    name: "Шейк 'Ореховое Счастье'",
    description: "Ореховый шейк с карамелью.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 51,
    name: "Шейк 'Тропический Рай'",
    description: "Шейк с ананасом и кокосом.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 52,
    name: "Шейк 'Яблоко-Корица'",
    description: "Шейк с яблоком и корицей.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 53,
    name: "Шейк 'Клубничный Сон'",
    description: "Клубничный шейк с взбитыми сливками.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 54,
    name: "Шейк 'Мятное Наслаждение'",
    description: "Шейк с мятой и шоколадом.",
    price: 4.5,
    category: "Shakes",
  },
  // Alcohol
  {
    id: 55,
    name: "Виски 'Бурбон'",
    description: "Крепкий бурбон с ванильным оттенком.",
    price: 7.0,
    category: "Alcohol",
  },
  {
    id: 56,
    name: "Ром 'Кубинский'",
    description: "Ром с нотками карамели и специй.",
    price: 6.5,
    category: "Alcohol",
  },
  {
    id: 57,
    name: "Джин 'Лондонский'",
    description: "Джин с травяными нотками.",
    price: 7.0,
    category: "Alcohol",
  },
  {
    id: 58,
    name: "Шампанское 'Брут'",
    description: "Шампанское с сухим вкусом и пузырьками.",
    price: 9.0,
    category: "Alcohol",
  },
  {
    id: 59,
    name: "Коктейль 'Куба Либре'",
    description: "Коктейль с ромом, колой и лаймом.",
    price: 5.5,
    category: "Alcohol",
  },
  // Additional items to make 80
  // Main Courses
  {
    id: 60,
    name: "Ризотто 'Грибное'",
    description: "Ризотто с грибами и пармезаном.",
    price: 11.99,
    category: "Main Courses",
  },
  {
    id: 61,
    name: "Греческий салат с оливками",
    description: "Салат с оливками, помидорами и огурцами.",
    price: 6.5,
    category: "Main Courses",
  },
  {
    id: 62,
    name: "Тортилья 'Мексиканская'",
    description: "Тортилья с курицей и овощами.",
    price: 8.99,
    category: "Main Courses",
  },
  {
    id: 63,
    name: "Куриные наггетсы",
    description: "Хрустящие куриные наггетсы.",
    price: 7.5,
    category: "Main Courses",
  },
  {
    id: 64,
    name: "Говяжьи стейки 'На гриле'",
    description: "Стейки из говядины на гриле.",
    price: 15.99,
    category: "Main Courses",
  },
  // Appetizers
  {
    id: 65,
    name: "Тапас 'Ассорти'",
    description: "Ассорти тапас с различными начинками.",
    price: 6.0,
    category: "Appetizers",
  },
  {
    id: 66,
    name: "Брускетта 'С помидорами и базиликом'",
    description: "Брускетта с помидорами и базиликом.",
    price: 4.5,
    category: "Appetizers",
  },
  {
    id: 67,
    name: "Куриные мини-котлеты",
    description: "Мини-котлеты из куриного филе.",
    price: 5.5,
    category: "Appetizers",
  },
  {
    id: 68,
    name: "Мини-кебабы 'Гриль'",
    description: "Мини-кебабы из мяса на гриле.",
    price: 6.5,
    category: "Appetizers",
  },
  {
    id: 69,
    name: "Панна-котта 'Фисташковая'",
    description: "Фисташковая панна-котта с ягодами.",
    price: 6.0,
    category: "Appetizers",
  },
  // Drinks
  {
    id: 70,
    name: "Кофе 'Латте Макиато'",
    description: "Кофе латте с дополнительным слоем молочной пены.",
    price: 3.8,
    category: "Drinks",
  },
  {
    id: 71,
    name: "Чай 'Черный с лимоном'",
    description: "Черный чай с дольками лимона.",
    price: 2.5,
    category: "Drinks",
  },
  {
    id: 72,
    name: "Смузи 'Грейпфрут'",
    description: "Смузи с грейпфрутом и медом.",
    price: 4.0,
    category: "Drinks",
  },
  {
    id: 73,
    name: "Коктейль 'Виски Сауэр'",
    description: "Коктейль с виски и кислым лимонным вкусом.",
    price: 5.5,
    category: "Drinks",
  },
  {
    id: 74,
    name: "Молочный коктейль 'Банановый'",
    description: "Молочный коктейль с бананом и медом.",
    price: 4.0,
    category: "Drinks",
  },
  // Desserts
  {
    id: 75,
    name: "Тирамису 'Классическое'",
    description: "Классическое тирамису с кофе и маскарпоне.",
    price: 6.0,
    category: "Desserts",
  },
  {
    id: 76,
    name: "Эклеры 'Шоколадные'",
    description: "Эклеры с шоколадным кремом.",
    price: 5.5,
    category: "Desserts",
  },
  {
    id: 77,
    name: "Шарлотка 'Яблочная'",
    description: "Шарлотка с яблоками и корицей.",
    price: 5.0,
    category: "Desserts",
  },
  {
    id: 78,
    name: "Пирожное 'Профитроли'",
    description: "Профитроли с заварным кремом.",
    price: 4.5,
    category: "Desserts",
  },
  {
    id: 79,
    name: "Мусс 'Шоколадный'",
    description: "Шоколадный мусс с взбитыми сливками.",
    price: 5.5,
    category: "Desserts",
  },
  // Shakes
  {
    id: 80,
    name: "Шейк 'Орео'",
    description: "Шейк с печеньем Орео.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 81,
    name: "Шейк 'Карамельный'",
    description: "Шейк с карамелью и взбитыми сливками.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 82,
    name: "Шейк 'Ванильный'",
    description: "Шейк с ванильным мороженым.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 83,
    name: "Шейк 'Шоколадно-Мятный'",
    description: "Шейк с шоколадом и мятой.",
    price: 4.5,
    category: "Shakes",
  },
  {
    id: 84,
    name: "Шейк 'Малиновый'",
    description: "Шейк с малиной и взбитыми сливками.",
    price: 4.5,
    category: "Shakes",
  },
  // Alcohol
  {
    id: 85,
    name: "Пиво 'Лагер'",
    description: "Легкое пиво с хмелевым вкусом.",
    price: 4.0,
    category: "Alcohol",
  },
  {
    id: 86,
    name: "Водка 'Грейпфрут'",
    description: "Водка с ароматом грейпфрута.",
    price: 6.0,
    category: "Alcohol",
  },
  {
    id: 87,
    name: "Вино 'Красное'",
    description: "Красное вино с ягодным вкусом.",
    price: 6.5,
    category: "Alcohol",
  },
  {
    id: 88,
    name: "Коктейль 'Маргарита'",
    description: "Коктейль с текилой, лаймом и солью.",
    price: 6.0,
    category: "Alcohol",
  },
  {
    id: 89,
    name: "Коньяк 'Классический'",
    description: "Классический коньяк с фруктовым послевкусием.",
    price: 7.5,
    category: "Alcohol",
  },
  // Menu of the Day
  {
    id: 90,
    name: "День 1: Бургер и фри",
    description: "Специальное предложение: бургер с картошкой фри.",
    price: 7.99,
    category: "Menu of the Day",
  },
  {
    id: 91,
    name: "День 2: Пицца и напиток",
    description: "Пицца с любым напитком по выбору.",
    price: 10.99,
    category: "Menu of the Day",
  },
  {
    id: 92,
    name: "День 3: Суши и соус",
    description: "Набор суши с соусом по выбору.",
    price: 12.99,
    category: "Menu of the Day",
  },
  {
    id: 93,
    name: "День 4: Паста и десерт",
    description: "Паста с выбором десерта.",
    price: 11.99,
    category: "Menu of the Day",
  },
  {
    id: 94,
    name: "День 5: Куриные крылышки и напиток",
    description: "Куриные крылышки с напитком по выбору.",
    price: 9.99,
    category: "Menu of the Day",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
    });
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const filteredMenuItems =
    currentCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === currentCategory);

  return (
    <div className="App">
      <nav className="menu-nav">
        <ul>
          <li
            className={currentCategory === "All" ? "active" : ""}
            onClick={() => handleCategoryChange("All")}
          >
            Все
          </li>
          <li
            className={currentCategory === "Appetizers" ? "active" : ""}
            onClick={() => handleCategoryChange("Appetizers")}
          >
            Закуски
          </li>
          <li
            className={currentCategory === "Main Courses" ? "active" : ""}
            onClick={() => handleCategoryChange("Main Courses")}
          >
            Основные блюда
          </li>
          <li
            className={currentCategory === "Drinks" ? "active" : ""}
            onClick={() => handleCategoryChange("Drinks")}
          >
            Напитки
          </li>
          <li
            className={currentCategory === "Desserts" ? "active" : ""}
            onClick={() => handleCategoryChange("Desserts")}
          >
            Десерты
          </li>
          <li
            className={currentCategory === "Shakes" ? "active" : ""}
            onClick={() => handleCategoryChange("Shakes")}
          >
            Коктейли
          </li>
          <li
            className={currentCategory === "Alcohol" ? "active" : ""}
            onClick={() => handleCategoryChange("Alcohol")}
          >
            Алкоголь
          </li>
          <li
            className={currentCategory === "Menu of the Day" ? "active" : ""}
            onClick={() => handleCategoryChange("Menu of the Day")}
          >
            Меню дня
          </li>
        </ul>
      </nav>

      <Menu menuItemsData={filteredMenuItems} addToCart={addToCart} />
      <Cart
        cartItems={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;
