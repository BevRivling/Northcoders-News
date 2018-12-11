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
                <li id={article.article_id}>
                  <ArticleCard articleInfo={article} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="grey-background">
            <img alt="loading" id="loading" src={loading} />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    api.getArticles().then(articles => {
      console.log(articles);
      this.setState({ articles: articles, isLoaded: true });
    });
  };
}

export default Articles;
