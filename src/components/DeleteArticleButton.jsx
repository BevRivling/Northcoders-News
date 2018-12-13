import React from "react";

const DeleteArticleButton = ({ toggleDelete, deleteOptionsOpen }) => {
  return (
    <button
      className={`delete-button ${deleteOptionsOpen ? "open" : "closed"}`}
      onClick={() => {
        toggleDelete();
      }}
    >
      -
    </button>
  );
};

export default DeleteArticleButton;
