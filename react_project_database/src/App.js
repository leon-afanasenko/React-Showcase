import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/post";
import PostForm from "./components/postForm";
import Header from "./components/header";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://66ced65a901aab24841fc49e.mockapi.io/tasks")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <PostForm setPosts={setPosts} />
      <Post posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default App;
