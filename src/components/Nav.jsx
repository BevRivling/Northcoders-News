import React from "react";
import { Link } from "@reach/router";

const Nav = ({ topics, toggleNav, chooseTopic }) => {
  const navLinks = (
    <ul className="nav-links">
      <Link to="/articles/all">
        <li key="all" onClick={() => chooseTopic("all")}>
          all
        </li>
      </Link>
      {topics.map(topic => {
        return (
          <Link to={`/articles/${topic.slug}`}>
            <li key={topic.slug} onClick={() => chooseTopic(topic.slug)}>
              {topic.slug}
            </li>
          </Link>
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
