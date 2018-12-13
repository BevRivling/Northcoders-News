import React from "react";

const CommentCard = ({ comment, voteComment, deleteComment }) => {
  return (
    <div className="comment-card">
      <p className="comm-body">"{comment.body}"</p>
      <div className="comm-deets">
        {" "}
        <div className="comm-stats">
          <p className="comm-auth">- {comment.author}</p>
          <p className="comm-auth">votes: {comment.votes}</p>
        </div>
        <div className="comm-butts">
          <p
            className="comm-auth"
            onClick={() => voteComment(comment.comments_id)}
          >
            Vote
          </p>
          <p
            className="comm-auth"
            onClick={() => deleteComment(comment.comments_id)}
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
