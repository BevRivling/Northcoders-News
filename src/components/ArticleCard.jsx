import React from "react";

const ArticleCard = ({ articleInfo }) => {
  console.log(articleInfo);
  return (
    <div className="article-card">
      <div className="placeholder" />
      <div className="card-content">
        <h4>{articleInfo.title}</h4>
        <p>Author: {articleInfo.author}</p>
        <p>Date: {articleInfo.created_at}</p>
        <p>Votes: {articleInfo.votes}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
