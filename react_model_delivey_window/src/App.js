import React, { useState } from "react";
import NavMenu from "./NavMenu";
import Form from "./Form";
import Buttons from "./Buttons";
import Notification from "./Notification";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);

  const createOrder = (e) => {
    e.preventDefault();
    setTimeout(() => {
      addNotification(
        "Заказ создан",
        "Ожидайте дальнейшей информации",
        "success"
      );
    }, 2000);
  };

  const addNotification = (title, text, type) => {
    setNotifications((prev) => [...prev, { title, text, type }]);
  };

  const removeNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <NavMenu />
      <Form onSubmit={createOrder} />
      <Buttons
        onPaid={() =>
          addNotification(
            "Заказ оплачен",
            "Ваш заказ был успешно оплачен",
            "success"
          )
        }
        onInDelivery={() =>
          addNotification("Доставляется", "Ваш заказ в пути", "info")
        }
        onError={() =>
          addNotification("Ошибка", "Произошла ошибка с вашим заказом", "error")
        }
      />
      <div className="notifications-container">
        {notifications.map((notif, index) => (
          <Notification
            key={index}
            title={notif.title}
            text={notif.text}
            type={notif.type}
            onClose={() => removeNotification(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
