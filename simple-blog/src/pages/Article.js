import React from "react";
import { useParams } from "react-router-dom";

function Article() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Article {userId}</h1>
    </div>
  );
}

export default Article;
