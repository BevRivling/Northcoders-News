import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SideFooter from "./components/SideFooter";
import Nav from "./components/Nav";
import Focus from "./components/Focus";
import * as api from "./api";

class App extends Component {
  state = {
    articles: [],
    topics: [],
    toggleNav: false
  };
  render() {
    return (
      <div className="App">
        <Header toggleNav={this.toggleNav} />
        <Nav toggleNav={this.state.toggleNav} topics={this.state.topics} />
        <Articles articles={this.state.articles} />
        <SideFooter />
        <Focus />
      </div>
    );
  }

  componentDidMount() {
    this.getNav();
    this.getArticles();
  }

  toggleNav = () => {
    console.log(this.state.toggleNav);
    this.setState(prevState => ({
      toggleNav: !prevState.toggleNav
    }));
  };

  getArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
  getNav = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default App;
