import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SideFooter from "./components/SideFooter";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import NotFound from "./components/NotFound";
import * as api from "./api";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    topicSlug: "all",
    topics: [],
    passwordCorrect: true,
    usernameCorrect: true,
    user: "",
    toggleNav: false,
    orderBy: ""
  };
  render() {
    if (JSON.parse(localStorage.getItem("loggedIn"))) {
      return (
        <div className="App">
          <Header toggleNav={this.toggleNav} colours={this.state.toggleNav} />
          <Nav
            toggleNav={this.state.toggleNav}
            chooseTopic={this.chooseTopic}
            topics={this.state.topics}
          />
          <Router>
            <NotFound path="/404" />
            <Articles resetOrder={this.resetOrder} topic="" path="/" />
            <Articles
              resetOrder={this.resetOrder}
              orderBy={this.state.orderBy}
              user={this.state.username}
              path="/articles/all"
              topic="all"
            />
            <Articles
              resetOrder={this.resetOrder}
              orderBy={this.state.orderBy}
              user={this.state.username}
              path="/articles/:topic"
            />
          </Router>
          <SideFooter
            logOut={this.logOut}
            changeOrder={this.changeOrder}
            user={this.state.user}
            topics={this.state.topics}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Auth
            passwordCorrect={this.state.passwordCorrect}
            usernameCorrect={this.state.usernameCorrect}
            attemptLogin={this.attemptLogin}
          />
        </div>
      );
    }
  }

  componentDidMount() {
    this.getNav();
  }

  resetOrder = () => {
    this.setState({ orderBy: "" });
  };

  attemptLogin = details => {
    api.getUsers().then(usersArr => {
      usersArr.forEach(user => {
        if (user.username === details.username) {
          this.setState({
            user: user.username,
            usernameCorrect: true,
            passwordCorrect: false
          });
          if (details.password !== "") {
            localStorage.setItem("user", this.state.user);
            localStorage.setItem("loggedIn", true);
            this.setState({ passwordCorrect: true });
          } else {
            this.setState({ passwordCorrect: false });
          }
        } else {
          this.setState({ usernameCorrect: false });
        }
      });
    });
  };

  logOut = () => {
    this.setState({ user: "" });
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("user");
  };

  toggleNav = () => {
    this.setState(prevState => ({
      toggleNav: !prevState.toggleNav
    }));
  };

  chooseTopic = topic => {
    this.setState({ topicSlug: topic });
  };

  changeOrder = (e, orderBy) => {
    e.preventDefault();
    this.setState({ orderBy });
  };

  getNav = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default App;
