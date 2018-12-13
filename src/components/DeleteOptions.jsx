import React from "react";

const DeleteOptions = ({
  deleteOptionsOpen,
  deleteArticleOrComment,
  article_id,
  toggleDelete
}) => {
  console.log(article_id);
  return (
    <div className="options-container">
      <button
        className={`delete-options ${deleteOptionsOpen ? "open" : "closed"}`}
        onClick={() => deleteArticleOrComment("article", article_id)}
      >
        Delete Article
      </button>
      <button
        className={`delete-options ${deleteOptionsOpen ? "open" : "closed"}`}
        onClick={() => toggleDelete()}
      >
        Cancel
      </button>
    </div>
  );
};

export default DeleteOptions;
