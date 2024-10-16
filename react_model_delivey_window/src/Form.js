import React from "react";

function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <button type="submit" className="large">
        Создать
      </button>
    </form>
  );
}

export default Form;
