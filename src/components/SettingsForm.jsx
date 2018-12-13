import React from "react";

const SettingsForm = ({ focus, changeOrder }) => {
  return (
    <div
      className={`${
        focus === "newArticle" ? "move-up add-article" : "add-article"
      }`}
    >
      <h4>Settings</h4>
      <form>
        <label>
          Sort By:
          <button className="sett-butts" onClick={e => changeOrder(e, "date")}>
            Date
          </button>
          <button
            className="sett-butts"
            onClick={e => changeOrder(e, "alphabetically")}
          >
            Alphabetically
          </button>
          <button
            className="sett-butts"
            onClick={e => changeOrder(e, "popularity")}
          >
            Popularity
          </button>
        </label>
      </form>
    </div>
  );
};

export default SettingsForm;
