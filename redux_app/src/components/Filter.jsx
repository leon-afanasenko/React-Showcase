import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

const Filter = (props) => {
  const handleChange = (event) => {
    props.setFilter(event.target.value);
  };

  return (
    <div className={styles.filter}>
      <input
        type="text"
        value={props.filter}
        onChange={handleChange}
        placeholder="Filter users"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
