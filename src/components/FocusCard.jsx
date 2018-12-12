import React, { Component } from "react";
import AddCommentButton from "./AddCommentButton";
import AddVoteButton from "./AddVoteButton";
import CommentReel from "./CommentReel";
import CommentForm from "./CommentForm";
import EditArticleButton from "./EditArticleButton";
import DeleteArticleButton from "./DeleteArticleButton";
import * as api from "../api";

class FocusCard extends Component {
  state = {
    votes: this.props.focusArticle.votes,
    voteClicked: false,
    commentFormOpen: false,
    commentToPost: ""
  };
  render() {
    const { toggleFocus, focusArticle, addVote } = this.props;
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
          {this.state.commentFormOpen ? (
            <CommentForm
              article_id={focusArticle.article_id}
              postComment={this.postComment}
            />
          ) : (
            <CommentReel
              commentToPost={this.state.commentToPost}
              id={focusArticle.article_id}
            />
          )}

          <div className="card-buttons">
            <AddCommentButton openCommentForm={this.openCommentForm} />
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

  openCommentForm = () => {
    this.setState(prevState => ({
      commentFormOpen: !prevState.commentFormOpen,
      commentPosted: true
    }));
  };

  postComment = (article_id, comment, user_id = 1) => {
    api.postCommentByArticleId(article_id, comment, user_id);
    this.setState(prevState => ({
      commentFormOpen: false,
      commentToPost: comment
    }));
  };
}
export default FocusCard;
