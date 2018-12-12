import React from "react";

const AddComment = ({ toggleCommentForm }) => {
  return (
    <button onClick={() => toggleCommentForm()} className="comment-button">
      +
    </button>
  );
};

export default AddComment;
