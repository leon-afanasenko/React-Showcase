import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DynamicForm.module.css";

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const firstFieldValue = watch("firstField", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="firstField">First Field:</label>
        <input
          id="firstField"
          type="text"
          {...register("firstField", {
            required: "This field is required",
            minLength: { value: 3, message: "Minimum length is 3" },
          })}
        />
        {errors.firstField && (
          <p className={styles.error}>{errors.firstField.message}</p>
        )}
      </div>

      {firstFieldValue.length >= 3 && (
        <div className={styles.field}>
          <label htmlFor="secondField">Second Field:</label>
          <input id="secondField" type="text" {...register("secondField")} />
        </div>
      )}

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
