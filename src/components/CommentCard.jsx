import React from "react";

const CommentCard = ({ comment }) => {
  console.log(comment);
  return (
    <div className="comment-card">
      <p className="comm-body">"{comment.body}"</p>
      <p className="comm-auth">- {comment.author}</p>
    </div>
  );
};

export default CommentCard;
