import React, { Component } from "react";
import AddCommentButton from "./AddCommentButton";
import AddVoteButton from "./AddVoteButton";
import CommentReel from "./CommentReel";
import EditArticleButton from "./EditArticleButton";
import DeleteArticleButton from "./DeleteArticleButton";
import DeleteOptions from "./DeleteOptions";
import * as api from "../api";

class FocusCard extends Component {
  state = {
    votes: this.props.focusArticle.votes,
    voteClicked: false,
    commentFormOpen: false,
    deleteOptionsOpen: false
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
            <DeleteArticleButton
              toggleDelete={this.toggleDelete}
              deleteOptionsOpen={this.state.deleteOptionsOpen}
            />
            <DeleteOptions
              article_id={focusArticle.article_id}
              toggleDelete={this.toggleDelete}
              deleteArticleOrComment={this.deleteArticleOrComment}
              deleteOptionsOpen={this.state.deleteOptionsOpen}
            />
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

  deleteArticleOrComment = (articleOrComment, id) => {
    if (articleOrComment === "article") {
      this.props.toggleFocus();
      api.deleteArticleById(id).then(article => {
        alert(`You have deleted article "${id}"`);
        window.location.reload();
      });
    }
    if (articleOrComment === "comment") {
      api.deleteCommentById(id);
    }
  };

  toggleDelete = () => {
    this.setState(prevState => ({
      deleteOptionsOpen: !prevState.deleteOptionsOpen
    }));
  };

  toggleCommentForm = () => {
    this.setState(prevState => ({
      commentFormOpen: !prevState.commentFormOpen
    }));
  };
}
export default FocusCard;
