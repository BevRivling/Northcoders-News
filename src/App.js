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
    articles: [],
    topics: [],
    passwordCorrect: true,
    usernameCorrect: true,
    user: "",
    toggleNav: false,
    loggedIn: false
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
            <Articles
              user={this.state.username}
              path="/articles/all"
              articles={this.state.articles}
              topicSlug={this.state.topicSlug}
            />
            <Articles
              user={this.state.username}
              path="/articles/:topic"
              articles={this.state.articles}
              topicSlug={this.state.topicSlug}
            />
          </Router>
          <SideFooter user={this.state.username} topics={this.state.topics} />
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

  getNav = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default App;
