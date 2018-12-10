import React from "react";

const Nav = ({ topics, toggleNav }) => {
  return (
    <div className={`nav ${!toggleNav ? "inactive" : "active"}`}>
      <ul>
        {topics.map(topic => {
          return <li id={topic.slug}>{topic.slug}</li>;
        })}
      </ul>
    </div>
  );
};

export default Nav;
