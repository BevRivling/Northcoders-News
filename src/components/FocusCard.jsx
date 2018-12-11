import React from "react";
import AddComment from "./AddComment";
import AddVote from "./AddVote";

const FocusCard = ({ toggleFocus, focusArticle }) => {
  return (
    <div className="grey-background" onClick={() => toggleFocus()}>
      <div className="focus-card">
        <div className="placeholder">
          <h5>{focusArticle.title[0]}</h5>
        </div>
        <div className="card-content">
          <h3>{focusArticle.title}</h3>
          <span>{focusArticle.author}</span>{" "}
          <span> {focusArticle.created_at.slice(0, -15)}</span>
          <span>{focusArticle.votes}</span>
          <p>{focusArticle.body}</p>
          <div className="card-buttons">
            <AddComment />
            <AddVote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusCard;
