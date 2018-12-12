import React from "react";
import heart from "../img/heart.png";

const AddVote = ({ addVote, id }) => {
  return (
    <div className="vote" onClick={() => addVote(id)}>
      <img id="heart-focus" src={heart} alt="upvote" />
    </div>
  );
};

export default AddVote;
