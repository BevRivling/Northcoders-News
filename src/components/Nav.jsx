import React from "react";

const Nav = ({ topics, toggleNav, chooseTopic }) => {
  const navLinks = (
    <ul className="nav-links">
      <li key="all" onClick={() => chooseTopic("all")}>
        all
      </li>
      {topics.map(topic => {
        return (
          <li key={topic.slug} onClick={() => chooseTopic(topic.slug)}>
            {topic.slug}
          </li>
        );
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
