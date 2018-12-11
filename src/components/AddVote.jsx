import React from "react";
import heart from "../img/heart.png";

const AddVote = () => {
  return (
    <div className="vote">
      <img id="heart-focus" src={heart} alt="upvote" />
    </div>
  );
};

export default AddVote;
