// App.js
import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import GameCard from "./GameCard";
import Footer from "./Footer";
import "./index.css";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Весь каталог");

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const games = [
    {
      title: "CyberConnect2",
      genre: "Ролевая игра, Экшен",
      rating: "Крайне положительные (91%)",
      releaseDate: "2020-04-10",
      price: 3999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1468040/header.jpg",
    },
    {
      title: "Hades",
      genre: "Ролевая игра, Экшен",
      rating: "Крайне положительные (94%)",
      releaseDate: "2020-09-17",
      price: 1799,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    },
    {
      title: "Phasmophobia",
      genre: "Хоррор, Кооператив",
      rating: "Очень положительные (84%)",
      releaseDate: "2020-09-18",
      price: 1299,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg",
    },
    {
      title: "Among Us",
      genre: "Кооператив, Логическая игра",
      rating: "Очень положительные (82%)",
      releaseDate: "2018-11-16",
      price: 299,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
    },
    {
      title: "Fall Guys",
      genre: "Экшен, Платформер",
      rating: "Очень положительные (85%)",
      releaseDate: "2020-08-04",
      price: 2299,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1097150/header.jpg",
    },
    {
      title: "Sekiro: Shadows",
      genre: "Экшен, Ролевая игра",
      rating: "Крайне положительные (95%)",
      releaseDate: "2019-03-22",
      price: 3999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg",
    },
    {
      title: "The Outer Worlds",
      genre: "Ролевая игра, Экшен",
      rating: "Очень положительные (85%)",
      releaseDate: "2019-10-25",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/578650/header.jpg",
    },
    {
      title: "Control",
      genre: "Экшен, Приключения",
      rating: "Очень положительные (84%)",
      releaseDate: "2019-08-27",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg",
    },
    {
      title: "Death Stranding",
      genre: "Экшен, Приключения",
      rating: "Очень положительные (85%)",
      releaseDate: "2020-07-14",
      price: 3499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1190460/header.jpg",
    },
    {
      title: "Hitman 3",
      genre: "Экшен, Стелс",
      rating: "Очень положительные (81%)",
      releaseDate: "2021-01-20",
      price: 3499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg",
    },
    {
      title: "Valorant",
      genre: "Шутер от первого лица",
      rating: "Очень положительные (78%)",
      releaseDate: "2020-06-02",
      price: 0,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1668000/header.jpg",
    },
    {
      title: "Genshin Impact",
      genre: "Ролевая игра, Экшен",
      rating: "Очень положительные (84%)",
      releaseDate: "2020-09-28",
      price: 0,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1212300/header.jpg",
    },
    {
      title: "Apex Legends",
      genre: "Шутер от первого лица, Баттл рояль",
      rating: "Очень положительные (80%)",
      releaseDate: "2019-02-04",
      price: 0,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
    },
    {
      title: "Doom Eternal",
      genre: "Экшен, Шутер от первого лица",
      rating: "Крайне положительные (89%)",
      releaseDate: "2020-03-20",
      price: 3499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg",
    },
    {
      title: "Watch Dogs: Legion",
      genre: "Экшен, Приключения",
      rating: "Очень положительные (80%)",
      releaseDate: "2020-10-29",
      price: 3499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/639050/header.jpg",
    },
    {
      title: "Rainbow Six Siege",
      genre: "Шутер от первого лица, Тактический",
      rating: "Очень положительные (85%)",
      releaseDate: "2015-12-01",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg",
    },
    {
      title: "F1 22",
      genre: "Гонки, Симулятор",
      rating: "Очень положительные (79%)",
      releaseDate: "2022-07-01",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
    },
    {
      title: "Far Cry 6",
      genre: "Экшен, Шутер от первого лица",
      rating: "Очень положительные (74%)",
      releaseDate: "2021-10-07",
      price: 3499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1650090/header.jpg",
    },
    {
      title: "Battlefield 2042",
      genre: "Шутер от первого лица",
      rating: "В основном отрицательные (41%)",
      releaseDate: "2021-11-19",
      price: 3999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg",
    },
    {
      title: "The Sims 4",
      genre: "Симулятор жизни",
      rating: "Очень положительные (78%)",
      releaseDate: "2014-09-02",
      price: 1499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg",
    },
    {
      title: "Cities: Skylines",
      genre: "Симулятор, Стратегия",
      rating: "Очень положительные (89%)",
      releaseDate: "2015-03-10",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg",
    },
    {
      title: "Stardew Valley",
      genre: "Ролевая игра, Симулятор",
      rating: "Крайне положительные (97%)",
      releaseDate: "2016-02-26",
      price: 1199,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    },
    {
      title: "Terraria",
      genre: "Песочница, Выживание",
      rating: "Очень положительные (94%)",
      releaseDate: "2011-05-16",
      price: 799,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    },
    {
      title: "Subnautica",
      genre: "Выживание, Приключения",
      rating: "Очень положительные (92%)",
      releaseDate: "2018-01-23",
      price: 1799,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg",
    },
    {
      title: "No Man's Sky",
      genre: "Выживание, Космос",
      rating: "Очень положительные (81%)",
      releaseDate: "2016-08-09",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",
    },
    {
      title: "Kerbal Space Program",
      genre: "Симулятор, Космос",
      rating: "Очень положительные (89%)",
      releaseDate: "2015-04-27",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/220200/header.jpg",
    },
    {
      title: "Oxygen Not Included",
      genre: "Симулятор, Выживание",
      rating: "Очень положительные (91%)",
      releaseDate: "2019-07-30",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/457140/header.jpg",
    },
    {
      title: "Dark Souls III",
      genre: "Ролевая игра, Экшен",
      rating: "Крайне положительные (89%)",
      releaseDate: "2016-03-24",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg",
    },
    {
      title: "Divinity: Original Sin 2",
      genre: "Ролевая игра, Тактическая",
      rating: "Крайне положительные (94%)",
      releaseDate: "2017-09-14",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg",
    },
    {
      title: "Hollow Knight",
      genre: "Метроидвания, Экшен",
      rating: "Крайне положительные (93%)",
      releaseDate: "2017-02-24",
      price: 999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    },
    {
      title: "Slay the Spire",
      genre: "Карточная игра, Рогалик",
      rating: "Крайне положительные (95%)",
      releaseDate: "2019-01-23",
      price: 1299,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
    },
    {
      title: "The Binding of Isaac: Rebirth",
      genre: "Рогалик, Экшен",
      rating: "Крайне положительные (93%)",
      releaseDate: "2014-11-04",
      price: 799,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg",
    },
    {
      title: "Hotline Miami",
      genre: "Экшен, Вверх",
      rating: "Крайне положительные (90%)",
      releaseDate: "2012-10-23",
      price: 399,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/219150/header.jpg",
    },
    {
      title: "Baba Is You",
      genre: "Головоломка, Инди",
      rating: "Крайне положительные (91%)",
      releaseDate: "2019-03-13",
      price: 1299,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/736260/header.jpg",
    },
    {
      title: "Disco Elysium",
      genre: "Ролевая игра, Приключения",
      rating: "Крайне положительные (96%)",
      releaseDate: "2019-10-15",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg",
    },
    {
      title: "Tales of Arise",
      genre: "Ролевая игра, Экшен",
      rating: "Очень положительные (83%)",
      releaseDate: "2021-09-10",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1070600/header.jpg",
    },
    {
      title: "Ys VIII: Lacrimosa of Dana",
      genre: "Ролевая игра, Экшен",
      rating: "Очень положительные (87%)",
      releaseDate: "2018-04-16",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/579180/header.jpg",
    },
    {
      title: "Monster Hunter: World",
      genre: "Ролевая игра, Экшен",
      rating: "Очень положительные (84%)",
      releaseDate: "2018-08-09",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg",
    },
    {
      title: "Nioh 2",
      genre: "Экшен, Ролевая игра",
      rating: "Очень положительные (85%)",
      releaseDate: "2021-02-05",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    },
    {
      title: "Dying Light 2",
      genre: "Экшен, Выживание",
      rating: "В основном положительные (65%)",
      releaseDate: "2022-02-04",
      price: 3499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg",
    },
    {
      title: "Just Cause 4",
      genre: "Экшен, Открытый мир",
      rating: "В основном положительные (74%)",
      releaseDate: "2018-12-04",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/517630/header.jpg",
    },
    {
      title: "Far Cry 5",
      genre: "Экшен, Открытый мир",
      rating: "Очень положительные (79%)",
      releaseDate: "2018-03-27",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/552520/header.jpg",
    },
    {
      title: "Assassin's Creed Valhalla",
      genre: "Экшен, Ролевая игра",
      rating: "Очень положительные (78%)",
      releaseDate: "2020-11-10",
      price: 3499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1446780/header.jpg",
    },
    {
      title: "Ghost Recon: Breakpoint",
      genre: "Экшен, Тактический шутер",
      rating: "В основном отрицательные (41%)",
      releaseDate: "2019-10-04",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/750920/header.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      genre: "Ролевая игра, Приключения",
      rating: "Крайне положительные (93%)",
      releaseDate: "2015-05-19",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    },
    {
      title: "Metro Exodus",
      genre: "Экшен, Приключения",
      rating: "Очень положительные (81%)",
      releaseDate: "2019-02-15",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/412020/header.jpg",
    },
    {
      title: "Remnant: From the Ashes",
      genre: "Экшен, Ролевая игра",
      rating: "Очень положительные (80%)",
      releaseDate: "2019-08-20",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/617290/header.jpg",
    },
    {
      title: "Little Nightmares",
      genre: "Хоррор, Платформер",
      rating: "Очень положительные (84%)",
      releaseDate: "2017-04-28",
      price: 999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg",
    },
    {
      title: "Sekiro: Shadows Die Twice",
      genre: "Экшен, Ролевая игра",
      rating: "Крайне положительные (95%)",
      releaseDate: "2019-03-22",
      price: 3999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg",
    },
    {
      title: "Hades",
      genre: "Ролевая игра, Экшен",
      rating: "Крайне положительные (94%)",
      releaseDate: "2020-09-17",
      price: 1799,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    },
    {
      title: "Hollow Knight",
      genre: "Метроидвания, Экшен",
      rating: "Крайне положительные (93%)",
      releaseDate: "2017-02-24",
      price: 999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    },
    {
      title: "Celeste",
      genre: "Платформер, Инди",
      rating: "Крайне положительные (97%)",
      releaseDate: "2018-01-25",
      price: 999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
    },
    {
      title: "Undertale",
      genre: "Ролевая игра, Инди",
      rating: "Крайне положительные (95%)",
      releaseDate: "2015-09-15",
      price: 499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg",
    },
    {
      title: "Darkestville Castle",
      genre: "Приключенческие игры, Инди",
      rating: "Крайне положительные (96.17%) ↑ 201 ↓ 8",
      releaseDate: "2017-09-21",
      price: 895,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/384840/header.jpg",
    },
    {
      title: "Dota 2",
      genre: "MOBA, Стратегия",
      rating: "Очень положительные (87%)",
      releaseDate: "2013-07-09",
      price: 0,
      available: true,
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    },
    {
      title: "Counter-Strike: Global Offensive",
      genre: "Шутер от первого лица",
      rating: "Очень положительные (88%)",
      releaseDate: "2012-08-21",
      price: 0,
      available: true,
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    },
    {
      title: "Grand Theft Auto V",
      genre: "Экшен, Открытый мир",
      rating: "Очень положительные (84%)",
      releaseDate: "2015-04-14",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      genre: "Ролевая игра, Открытый мир",
      rating: "Крайне положительные (93%)",
      releaseDate: "2015-05-19",
      price: 1199,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    },
    {
      title: "Red Dead Redemption 2",
      genre: "Экшен, Открытый мир",
      rating: "Очень положительные (83%)",
      releaseDate: "2019-12-05",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    },
    {
      title: "Cyberpunk 2077",
      genre: "Ролевая игра, Экшен",
      rating: "В основном положительные (78%)",
      releaseDate: "2020-12-10",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    },
    {
      title: "Elden Ring",
      genre: "Ролевая игра, Экшен",
      rating: "Крайне положительные (95%)",
      releaseDate: "2022-02-25",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    },
    {
      title: "God of War",
      genre: "Экшен, Приключения",
      rating: "Крайне положительные (94%)",
      releaseDate: "2018-04-20",
      price: 1999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
    },
    {
      title: "Horizon Zero Dawn",
      genre: "Экшен, Ролевая игра",
      rating: "Очень положительные (89%)",
      releaseDate: "2020-08-07",
      price: 1499,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg",
    },
    {
      title: "FIFA 23",
      genre: "Спорт, Симулятор",
      rating: "В основном положительные (71%)",
      releaseDate: "2022-09-30",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1812950/header.jpg",
    },
    {
      title: "NBA 2K23",
      genre: "Спорт, Симулятор",
      rating: "В основном отрицательные (38%)",
      releaseDate: "2022-09-09",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1645200/header.jpg",
    },
    {
      title: "Call of Duty: 2",
      genre: "Шутер от первого лица",
      rating: "В основном положительные (75%)",
      releaseDate: "2022-10-28",
      price: 3999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg",
    },
    {
      title: "Forza Horizon 5",
      genre: "Гонки",
      rating: "Очень положительные (92%)",
      releaseDate: "2021-11-09",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
    },
    {
      title: "Microsoft Flight Simulator",
      genre: "Симулятор",
      rating: "Очень положительные (91%)",
      releaseDate: "2020-08-18",
      price: 2999,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1250410/header.jpg",
    },
    {
      title: "Starfield",
      genre: "Ролевая игра, Космос",
      rating: "TBA",
      releaseDate: "2023-09-06",
      price: 3999,
      available: false,
      status: "preorder",
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg",
    },
    {
      title: "S.T.A.L.K.E.R. 2:",
      genre: "Шутер от первого лица, Хоррор",
      rating: "TBA",
      releaseDate: "2023-12-31",
      price: 2999,
      available: false,
      status: "preorder",
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1643800/header.jpg",
    },
    {
      title: "Minecraft",
      genre: "Песочница, Выживание",
      rating: "Крайне положительные (93%)",
      releaseDate: "2011-11-18",
      price: 1299,
      available: true,
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/485620/header.jpg",
    },
  ];

  const filteredGames = games.filter((game) => {
    if (activeFilter === "Весь каталог") {
      return true;
    } else if (activeFilter === "Новинки") {
      return new Date(game.releaseDate) > new Date("2022-12-01");
    } else if (activeFilter === "Предзаказы") {
      return game.status === "preorder";
    } else if (activeFilter === "Популярные") {
      return game.rating.includes("(90") || game.rating.includes("100");
    } else if (activeFilter === "Недоступные в РФ") {
      return !game.available;
    }
    return true;
  });

  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen flex flex-col">
        <Header toggleTheme={toggleTheme} />
        <NavBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <main className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">
            Игры ({filteredGames.length})
          </h2>
          <div className="card-container">
            {filteredGames.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
