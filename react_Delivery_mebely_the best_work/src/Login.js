import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="login">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <form className="login-form">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 mb-4 border rounded-md w-full"
          />
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="p-2 mb-4 border rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md w-full"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
