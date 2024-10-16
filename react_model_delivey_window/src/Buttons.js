import React from "react";

function Buttons({ onPaid, onInDelivery, onError }) {
  return (
    <div className="buttons">
      <button onClick={onPaid}>Оплачен</button>
      <button onClick={onInDelivery}>Доставляется</button>
      <button onClick={onError}>Ошибка</button>
    </div>
  );
}

export default Buttons;
