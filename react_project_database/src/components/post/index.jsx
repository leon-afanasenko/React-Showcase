import React, { useState } from "react";
import style from "./style.module.css";
import userLogo from "../../assets/icons/User.png";
import axios from "axios";

const Post = ({ posts, setPosts }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const filteredPosts = posts.filter((post) => {
    const title = post.title ? post.title.toLowerCase() : "";
    const content = post.content ? post.content.toLowerCase() : "";
    const searchLower = search.toLowerCase();
    return (
      title.includes(searchLower) ||
      content.includes(searchLower) ||
      post.id.toString().includes(searchLower)
    );
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return Math.min(prevPage + 1, totalPages);
      } else if (direction === "prev") {
        return Math.max(prevPage - 1, 1);
      }
      return prevPage;
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://66ced65a901aab24841fc49e.mockapi.io/tasks/${id}`
      );
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Список постов</h1>
      <input
        type="text"
        placeholder="Поиск по ID или тексту"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={style.searchInput}
      />
      <div className={style.posts}>
        {currentPosts.map((post) => (
          <div key={post.id} className={style.card}>
            <img src={userLogo} alt="User" className={style.userLogo} />
            <div className={style.content}>
              <h2 className={style.postTitle}>
                {post.title || "Без заголовка"}
              </h2>
              <p className={style.postText}>
                {post.content || "Нет содержания"}
              </p>
              <div className={style.footer}>
                <span className={style.postId}>ID: {post.id}</span>
                <button
                  onClick={() => handleDelete(post.id)}
                  className={style.deleteButton}
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.pagination}>
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className={style.paginationButton}
        >
          Назад
        </button>
        <span className={style.pageInfo}>
          {currentPage} из {totalPages}
        </span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className={style.paginationButton}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Post;
