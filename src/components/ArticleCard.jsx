import React from "react";
import heart from "../img/heart.png";

const ArticleCard = ({ articleInfo }) => {
  return (
    <div className="article-card">
      <div className="placeholder" />
      <div className="card-content">
        <h4>{articleInfo.title}</h4>
        <p>Author: {articleInfo.author}</p>
        <p>Date: {articleInfo.created_at.slice(0, -15)}</p>
        <p>Votes: {articleInfo.votes}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
