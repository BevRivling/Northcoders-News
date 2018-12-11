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
    let content;
    if (this.state.isLoaded) {
      console.log(this.state.articles);
      content = (
        <ul className="articles-list">
          {this.state.articles.map(article => {
            return (
              <li id={article.article_id}>
                <ArticleCard articleInfo={article} />
              </li>
            );
          })}
        </ul>
      );
    } else {
      content = (
        <div className="grey-background">
          <img alt="loading" id="loading" src={loading} />
        </div>
      );
    }

    return <div className="main">{content}</div>;
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
