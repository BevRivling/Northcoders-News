import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import loading from "../img/loading.svg";

class Articles extends Component {
  state = {
    articles: [],
    isLoaded: false
  };
  render() {
    return (
      <div className="main">
        {this.state.isLoaded ? (
          <ul className="articles-list">
            {this.props.articles.map(article => {
              return (
                <li>
                  <ArticleCard articleInfo={article} />
                </li>
              );
            })}
          </ul>
        ) : (
          <img id="loading" src={loading} />
        )}
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles: articles, isLoaded: true });
    });
  };
}

export default Articles;
