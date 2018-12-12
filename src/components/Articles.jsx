import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import FocusCard from "./FocusCard";
import * as api from "../api";
import { Router } from "@reach/router";
import Loading from "./Loading";

class Articles extends Component {
  state = {
    articles: [],
    isLoaded: false,
    focusArticle: {},
    isFocused: false
  };

  render() {
    let content;
    if (this.state.isLoaded) {
      content = (
        <ul className="articles-list">
          {this.state.articles.map(article => {
            return (
              <li
                key={article.article_id}
                onClick={() => {
                  this.getArticleById(article.article_id);
                }}
              >
                <ArticleCard articleInfo={article} />
              </li>
            );
          })}
        </ul>
      );
    } else {
      content = <Loading />;
    }

    return (
      <div className="main">
        {content}
        {this.state.isFocused ? (
          <FocusCard
            toggleFocus={this.toggleFocus}
            focusArticle={this.state.focusArticle}
            addVote={this.addVote}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.topic);
    this.getArticles(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.getArticles(this.props.topicSlug);
    }
    if (this.state.focusArticle !== prevState.focusArticle) {
      this.toggleFocus(this.state.focusArticle);
    }
  }

  toggleFocus = focusArticle => {
    this.setState(prevState => ({
      isFocused: !prevState.isFocused
    }));
  };

  addVote = articleId => {
    api.voteArticleById(articleId).then(console.log);
  };

  getArticles = slug => {
    api.getArticles(slug).then(articles => {
      if (this.state.isLoaded) this.setState({ articles: articles });
      else {
        // Sorry - this is just to show off my loading icon
        setTimeout(() => {
          this.setState({ articles: articles, isLoaded: true });
        }, 3000);
      }
    });
  };

  getArticleById = id => {
    api.getArticleById(id).then(article => {
      this.setState({ focusArticle: article });
    });
  };
}

export default Articles;
