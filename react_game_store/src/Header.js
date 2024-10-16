import React, { useState } from "react";
import "./App.css";

const Header = ({ toggleTheme }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    bankAccountNumber: "",
    bankCode: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    bankAccountNumber: "",
    bankCode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};
    const cardNumberPattern = /^[0-9]{16}$/;
    const cvvPattern = /^[0-9]{3}$/;
    const bankAccountPattern = /^[0-9]{8,20}$/;
    const bankCodePattern = /^[0-9]{6}$/;

    if (!cardNumberPattern.test(formData.cardNumber)) {
      newErrors.cardNumber = "Номер карты должен содержать 16 цифр.";
    }
    if (!formData.cardHolderName.trim()) {
      newErrors.cardHolderName = "Имя владельца карты не может быть пустым.";
    }
    if (!formData.expiryDate) {
      newErrors.expiryDate = "Выберите дату истечения срока.";
    }
    if (!cvvPattern.test(formData.cvv)) {
      newErrors.cvv = "CVV должен содержать 3 цифры.";
    }
    if (!bankAccountPattern.test(formData.bankAccountNumber)) {
      newErrors.bankAccountNumber =
        "Номер банковского счета должен содержать от 8 до 20 цифр.";
    }
    if (!bankCodePattern.test(formData.bankCode)) {
      newErrors.bankCode = "Код банка должен содержать 6 цифр.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setFormVisible(false);
    }
  };

  return (
    <header className="flex justify-between items-center mb-4 p-4 bg-primary text-primary-foreground shadow-lg">
      <h1 className="text-3xl font-bold">KUPIKOD</h1>
      <div className="flex items-center">
        <button
          onClick={() => setFormVisible(true)}
          className="bg-yellow-400 hover:bg-black text-black hover:text-yellow-400 p-2 rounded-lg transition duration-300"
        >
          Пополнить Steam
        </button>
        <input
          type="text"
          placeholder="Найти что-то конкретное..."
          className="border border-border rounded-lg p-2 ml-4"
        />
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-lg bg-muted hover:bg-muted-foreground transition duration-300"
        >
          Switch Theme
        </button>
        <button
          onClick={() => setLoginVisible(true)}
          style={{
            marginLeft: "14px",
            backgroundColor: "#FFD700",
            color: "#000",
          }}
          className="ml-4 p-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="transition-colors duration-300">Вход</span>
        </button>
        <button
          onClick={() => setRegisterVisible(true)}
          style={{
            backgroundColor: "#FFD700",
            color: "#000",
            marginLeft: "14px",
          }}
          className="ml-4 p-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="transition-colors duration-300">Регистрация</span>
        </button>
      </div>

      {isFormVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-6">Пополнение счета</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Номер карты
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="Введите номер карты"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={`error ${errors.cardNumber ? "error" : ""}`}
                  maxLength="16"
                  required
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cardHolderName"
                  className="block text-sm font-medium mb-2"
                >
                  Имя владельца карты
                </label>
                <input
                  type="text"
                  id="cardHolderName"
                  placeholder="Введите имя владельца"
                  value={formData.cardHolderName}
                  onChange={handleChange}
                  className={`error ${errors.cardHolderName ? "error" : ""}`}
                  required
                />
                {errors.cardHolderName && (
                  <p className="text-red-500 text-sm">
                    {errors.cardHolderName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium mb-2"
                >
                  Дата истечения срока
                </label>
                <input
                  type="month"
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className={`error ${errors.expiryDate ? "error" : ""}`}
                  required
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-sm">{errors.expiryDate}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="Введите CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className={`error ${errors.cvv ? "error" : ""}`}
                  maxLength="3"
                  required
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm">{errors.cvv}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bankAccountNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Номер банковского счета
                </label>
                <input
                  type="text"
                  id="bankAccountNumber"
                  placeholder="Введите номер счета"
                  value={formData.bankAccountNumber}
                  onChange={handleChange}
                  className={`error ${errors.bankAccountNumber ? "error" : ""}`}
                  maxLength="20"
                  required
                />
                {errors.bankAccountNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.bankAccountNumber}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bankCode"
                  className="block text-sm font-medium mb-2"
                >
                  Код банка
                </label>
                <input
                  type="text"
                  id="bankCode"
                  placeholder="Введите код банка"
                  value={formData.bankCode}
                  onChange={handleChange}
                  className={`error ${errors.bankCode ? "error" : ""}`}
                  maxLength="6"
                  required
                />
                {errors.bankCode && (
                  <p className="text-red-500 text-sm">{errors.bankCode}</p>
                )}
              </div>
              <div className="flex justify-end gap-4">
                <button type="submit" className="modal-button">
                  Подтвердить
                </button>
                <button
                  type="button"
                  onClick={() => setFormVisible(false)}
                  className="modal-button cancel"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isLoginVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-6">Вход</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="loginEmail"
                  className="block text-sm font-medium mb-2"
                >
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="Введите электронную почту"
                  className="border border-border rounded-lg p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="loginPassword"
                  className="block text-sm font-medium mb-2"
                >
                  Пароль
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Введите пароль"
                  className="border border-border rounded-lg p-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button type="submit" className="modal-button">
                  Войти
                </button>
                <button
                  type="button"
                  onClick={() => setLoginVisible(false)}
                  className="modal-button cancel"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isRegisterVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-6">Регистрация</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="registerEmail"
                  className="block text-sm font-medium mb-2"
                >
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  placeholder="Введите электронную почту"
                  className="border border-border rounded-lg p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="registerPassword"
                  className="block text-sm font-medium mb-2"
                >
                  Пароль
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  placeholder="Введите пароль"
                  className="border border-border rounded-lg p-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button type="submit" className="modal-button">
                  Зарегистрироваться
                </button>
                <button
                  type="button"
                  onClick={() => setRegisterVisible(false)}
                  className="modal-button cancel"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
