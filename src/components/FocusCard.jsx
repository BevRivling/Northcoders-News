import React, { Component } from "react";
import AddCommentButton from "./AddCommentButton";
import AddVoteButton from "./AddVoteButton";
import CommentReel from "./CommentReel";
import EditArticleButton from "./EditArticleButton";
import DeleteArticleButton from "./DeleteArticleButton";
import * as api from "../api";

class FocusCard extends Component {
  state = {
    votes: this.props.focusArticle.votes,
    voteClicked: false,
    commentFormOpen: false
  };
  render() {
    const { toggleFocus, focusArticle } = this.props;
    return (
      <React.Fragment>
        <div className="grey-background" onClick={() => toggleFocus()} />
        <div className="focus-card">
          <div className="row">
            <div className="placeholder">
              <h5>{focusArticle.title[0]}</h5>
            </div>
            <div className="card-content">
              <h3>{focusArticle.title}</h3>
              <span>{focusArticle.author}</span>{" "}
              <span> {focusArticle.created_at.slice(0, -15)}</span>
              <p>{focusArticle.body}</p>
              <span>{this.state.votes}</span>
            </div>
          </div>

          <CommentReel
            formOpen={this.state.commentFormOpen}
            article_id={focusArticle.article_id}
            id={focusArticle.article_id}
          />

          <div className="card-buttons">
            <AddCommentButton toggleCommentForm={this.toggleCommentForm} />
            <AddVoteButton
              addVote={this.addVote}
              id={focusArticle.article_id}
            />
            <EditArticleButton />
            <DeleteArticleButton />
          </div>
        </div>
      </React.Fragment>
    );
  }

  addVote = articleId => {
    if (!this.state.voteClicked) {
      api.voteArticleById(articleId);
      this.setState(prevState => ({
        votes: prevState.votes + 1,
        voteClicked: true
      }));
    }
  };

  toggleCommentForm = () => {
    this.setState(prevState => {
      return {
        commentFormOpen: !prevState.commentFormOpen
      };
    });
  };
}
export default FocusCard;
