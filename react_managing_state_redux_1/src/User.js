import React from "react";
import { connect } from "react-redux";
import "./User.css";

const User = ({ name, status }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
