import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SideFooter from "./components/SideFooter";
import Nav from "./components/Nav";
import Focus from "./components/Focus";
import * as api from "./api";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    topicSlug: "",
    articles: [],
    topics: [],
    toggleNav: false
  };
  render() {
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
            path="/articles/all"
            articles={this.state.articles}
            topicSlug={this.state.topicSlug}
          />
          <Articles
            path="/articles/:topic"
            articles={this.state.articles}
            topicSlug={this.state.topicSlug}
          />
        </Router>
        <SideFooter topics={this.state.topics} />
        <Focus />
      </div>
    );
  }

  componentDidMount() {
    this.getNav();
  }

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
