import React from "react";
import logo from "../img/nc-logo.png";

const Header = ({ toggleNav }) => {
  return (
    <div className="header" onClick={() => toggleNav()}>
      <img id="logo" alt="northcoders logo" src={logo} />
    </div>
  );
};

export default Header;
