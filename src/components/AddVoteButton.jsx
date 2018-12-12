import React from "react";
import heart from "../img/heart.png";

const AddVote = ({ addVote, id }) => {
  return (
    <button className="vote" onClick={() => addVote(id)}>
      <img id="heart-focus" src={heart} alt="upvote" />
    </button>
  );
};

export default AddVote;
