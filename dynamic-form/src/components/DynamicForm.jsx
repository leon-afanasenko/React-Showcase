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

  const usernameValue = watch("username", "");
  const passwordValue = watch("password", "");
  const confirmPasswordValue = watch("confirmPassword", "");

  const isRegistrationValid =
    usernameValue.length >= 3 &&
    passwordValue.length >= 6 &&
    confirmPasswordValue === passwordValue;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
          })}
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === passwordValue || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className={styles.error}>{errors.confirmPassword.message}</p>
        )}
      </div>
      {isRegistrationValid && (
        <div className={styles.field}>
          <label htmlFor="additionalField">Additional Field:</label>
          <input
            id="additionalField"
            type="text"
            {...register("additionalField")}
          />
        </div>
      )}

      <button type="submit" className={styles.submitButton}>
        Register
      </button>
    </form>
  );
};

export default DynamicForm;
