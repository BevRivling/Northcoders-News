import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SideFooter from "./components/SideFooter";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
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
    loggedIn: true,
    orderBy: ""
  };
  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <Header toggleNav={this.toggleNav} colours={this.state.toggleNav} />
          <Nav
            toggleNav={this.state.toggleNav}
            chooseTopic={this.chooseTopic}
            topics={this.state.topics}
          />
          <Router>
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
            changeOrder={this.changeOrder}
            user={this.state.username}
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
          this.setState({ user: user.username });
          if (details.password === "") {
            this.setState({ passwordCorrect: false });
          } else this.setState({ loggedIn: true, passwordCorrect: true });
        } else {
          this.setState({ usernameCorrect: false, passwordCorrect: true });
        }
      });
    });
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
