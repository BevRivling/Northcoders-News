import React from "react";
import cog from "../img/cog.svg";

const SideFooter = () => {
  return (
    <div className="side-footer">
      <div id="add-button">+</div>
      <div id="settings">
        <img src={cog} alt="settings" />
      </div>
    </div>
  );
};

export default SideFooter;
