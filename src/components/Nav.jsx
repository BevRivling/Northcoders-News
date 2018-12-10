import React from "react";

const Nav = ({ topics, toggleNav }) => {
  const navLinks = (
    <ul>
      {topics.map(topic => {
        return <li id={topic.slug}>{topic.slug}</li>;
      })}
    </ul>
  );

  return (
    <div className={`nav ${!toggleNav ? "white inactive" : "red active"}`}>
      {toggleNav ? navLinks : <div />}
    </div>
  );
};

export default Nav;
