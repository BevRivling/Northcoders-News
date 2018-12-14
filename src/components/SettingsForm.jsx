import React from "react";
import user from "../img/user.png";

const SettingsForm = ({ focus, changeOrder, logOut }) => {
  return (
    <div
      className={`${
        focus === "newArticle" ? "move-up add-article" : "add-article"
      }`}
    >
      <h4>Settings</h4>
      <form className="settings-form">
        <label>
          Sort By
          <br />
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
      <label className="log-out-label">
        Log Out?
        <br />
        <button onClick={() => logOut()} className="log-out">
          <img src={user} alt="logout" id="log-out-button" />
        </button>
      </label>
    </div>
  );
};

export default SettingsForm;
