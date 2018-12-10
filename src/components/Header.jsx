import React from "react";
import redLogo from "../img/nc-logo.png";
import whiteLogo from "../img/nc-logo-invert.png";

const Header = ({ toggleNav, colours }) => {
  return (
    <div
      className={`header ${colours ? "active" : "inactive"}`}
      onClick={() => toggleNav()}
    >
      <img
        id="logo"
        className={` ${colours ? "active" : "inactive"}`}
        alt="northcoders logo"
        src={colours ? whiteLogo : redLogo}
      />
    </div>
  );
};

export default Header;
