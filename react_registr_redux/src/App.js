import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import "./App.css";

const App = ({ isAuthenticated }) => {
  return (
    <div className="app">
      {isAuthenticated ? <UserProfile /> : <LoginForm />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(App);
