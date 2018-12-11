import React from "react";
import AddComment from "./AddComment";
import AddVote from "./AddVote";
import CommentReel from "./CommentReel";

const FocusCard = ({ toggleFocus, focusArticle }) => {
  console.log(focusArticle.article_id);
  return (
    <React.Fragment>
      <div className="grey-background" onClick={() => toggleFocus()} />
      <div className="focus-card">
        <row>
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
        </row>
        <CommentReel id={focusArticle.article_id} />
      </div>
    </React.Fragment>
  );
};

export default FocusCard;
