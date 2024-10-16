import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import style from "./style.module.css";

const PostForm = ({ setPosts }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://66ced65a901aab24841fc49e.mockapi.io/tasks",
        data
      );
      setPosts((prevPosts) => [...prevPosts, response.data]);
      reset();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={style.formTitle}>Создать новый пост</h2>
      <div className={style.formGroup}>
        <label htmlFor="title" className={style.label}>
          Заголовок
        </label>
        <input
          id="title"
          type="text"
          {...register("title", { required: true })}
          className={style.input}
        />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="content" className={style.label}>
          Контент
        </label>
        <textarea
          id="content"
          {...register("content", { required: true })}
          className={style.textarea}
        />
      </div>
      <button type="submit" className={style.submitButton}>
        Добавить пост
      </button>
    </form>
  );
};

export default PostForm;
