import React from "react";
import { connect } from "react-redux";
import { logout } from "./actions";

const UserProfile = ({ user, logout }) => {
  return (
    <div className="user-profile">
      <h1>Welcome, {user}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
