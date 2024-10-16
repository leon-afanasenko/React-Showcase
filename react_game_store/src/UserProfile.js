import React, { useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "Иван Иванов",
    email: "ivan.ivanov@example.com",
    steamId: "ivan_steam",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Профиль обновлен:", profile);
  };

  return (
    <div className="user-profile p-4">
      <h2 className="text-2xl font-bold mb-4">Профиль пользователя</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="border border-border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border border-border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="steamId" className="block text-sm font-medium mb-2">
            Steam ID
          </label>
          <input
            type="text"
            id="steamId"
            name="steamId"
            value={profile.steamId}
            onChange={handleChange}
            className="border border-border rounded-lg p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-accent text-accent-foreground p-2 rounded hover:bg-primary hover:text-primary-foreground transition duration-300"
        >
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
