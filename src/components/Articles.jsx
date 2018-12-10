import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  render() {
    return (
      <div className="main">
        <ul className="articles-list">
          {this.props.articles.map(article => {
            return (
              <li>
                <ArticleCard articleInfo={article} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
