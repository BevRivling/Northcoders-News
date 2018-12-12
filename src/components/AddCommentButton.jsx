import React from "react";

const AddComment = ({ openCommentForm }) => {
  return (
    <button onClick={() => openCommentForm()} className="comment-button">
      +
    </button>
  );
};

export default AddComment;
