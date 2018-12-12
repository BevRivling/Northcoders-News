import React from "react";
import cog from "../img/cog.svg";

const EditArticleButton = () => {
  return (
    <button className="edit-button">
      <img src={cog} alt="settings" />
    </button>
  );
};

export default EditArticleButton;
