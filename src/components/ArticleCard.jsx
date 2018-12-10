import React from "react";

const ArticleCard = ({ articleInfo }) => {
  console.log(articleInfo);
  return (
    <div className="article-card">
      <h4>{articleInfo.title}</h4>
      <p>Author: {articleInfo.author}</p>
      <p>Date: {articleInfo.created_at}</p>
      <p>Votes: {articleInfo.votes}</p>
    </div>
  );
};

export default ArticleCard;
