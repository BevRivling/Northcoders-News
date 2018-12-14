import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import FocusCard from "./FocusCard";
import * as api from "../api";
import Loading from "./Loading";

class Articles extends Component {
  state = {
    articles: [],
    nextArticles: [],
    page: 1,
    isLoaded: false,
    focusArticle: {},
    isFocused: false
  };

  render() {
    let content;
    if (this.state.isLoaded) {
      content = (
        <ul onScroll={this.handleScroll} className="articles-list">
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
          />
        ) : (
          <div />
        )}
      </div>
    );
  }

  componentDidMount() {
    this.getArticles(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.orderBy !== prevProps.orderBy) {
      this.getArticles(this.props.topic);
    }
    if (this.props.topic !== prevProps.topic) {
      this.resetPage();
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

  getArticles = slug => {
    const { orderBy } = this.props;
    const { page } = this.state;
    Promise.all([
      api.getArticles(slug, orderBy),
      api.getArticles(slug, orderBy, page + 1)
    ]).then(data => {
      if (this.state.isLoaded)
        this.setState(prevState => ({
          articles: data[0],
          nextArticles: data[1]
        }));
      else {
        // Sorry - this is just to show off my loading icon
        setTimeout(() => {
          this.setState({ articles: data[0], isLoaded: true });
        }, 1000);
      }
    });
  };

  loadNextPage = () => {
    let newPage = this.state.articles;
    this.state.nextArticles.forEach(art => newPage.push(art));
    this.setState(prevState => ({
      articles: newPage,
      nextArticles: []
    }));
  };

  resetPage = () => {
    this.props.resetOrder();
    this.setState({ page: 1 }, this.getArticles(this.props.topic));
  };

  getArticleById = id => {
    api.getArticleById(id).then(article => {
      this.setState({ focusArticle: article });
    });
  };

  handleScroll = e => {
    const { scrollHeight, clientHeight, scrollTop } = e.target;
    if (
      clientHeight + scrollTop + 50 >= scrollHeight &&
      this.state.isLoaded &&
      this.state.nextArticles.length > 0
    ) {
      this.setState(
        prevState => ({ page: (prevState.page += 1) }),
        () => {
          this.loadNextPage();
        }
      );
    }
  };
}

export default Articles;
