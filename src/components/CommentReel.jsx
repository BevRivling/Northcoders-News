import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../api";

class CommentReel extends Component {
  state = {
    commentPosted: false,
    formOpen: false,
    comments: [{ author: "", votes: 0, body: "" }],
    currentComment: 0,
    comment: ""
  };

  render() {
    if (!this.state.formOpen) {
      return (
        <div className="wrapper">
          <div className="comment-reel">
            <button onClick={() => this.changeComment("previous")}>&lt;</button>
            <CommentCard
              deleteComment={this.deleteComment}
              voteComment={this.voteComment}
              comment={this.state.comments[this.state.currentComment]}
            />

            <button onClick={() => this.changeComment("next")}>&gt;</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <form className="comment-reel comment-form">
            <input onChange={this.handleChange} type="text" />
            <button onClick={this.handleSubmit} type="submit" id="post">
              POST
            </button>
          </form>
        </div>
      );
    }
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState(prevState => {
      return {
        comment: value
      };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const finalComment = this.state.comment;
    this.postComment(this.props.article_id, finalComment);
    //
  };

  componentDidMount() {
    this.getComments(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.commentPosted !== prevState.commentPosted) {
      this.getComments(this.props.id);
    }
    if (this.props !== prevProps) {
      this.setState(prevState => ({
        formOpen: this.props.formOpen
      }));
      this.getComments(this.props.id);
    }
  }

  getComments = id => {
    api.getCommentsByArticleId(id).then(comments => {
      this.setState({
        comments: comments,
        commentPosted: true
      });
    });
  };

  changeComment = direction => {
    const maxComments = this.state.comments.length - 1;
    let increment = 0;
    this.setState(prevState => {
      if (direction === "next") increment = prevState.currentComment + 1;
      else increment = prevState.currentComment - 1;
      if (increment > maxComments) increment = increment - maxComments;
      if (increment < 0) increment = increment + maxComments;
      return {
        currentComment: increment
      };
    });
  };

  voteComment = commentId => {
    if (!this.state.voteClicked) {
      api.voteCommentById(commentId);
      this.setState(prevState => ({
        ...this.state,
        comments: [
          ...this.state.comments,
          (this.state.comments[this.state.currentComment].votes += 1)
        ]
      }));
    }
  };

  deleteComment = commentId => {
    api.deleteCommentById(commentId);
    const newComments = this.state.comments.filter(
      comment => comment.comments_id !== commentId
    );
    console.log(newComments.length, this.state.comments.length);
    this.setState({
      comments: newComments
      // commentPosted: false
    });
  };

  postComment = (article_id, comment, user_id = 1) => {
    api.postCommentByArticleId(article_id, comment, user_id).then(console.log);
    this.setState(prevState => ({
      // currentComment: prevState.currentComment.length - 1,
      formOpen: false,
      commentPosted: false
    }));
  };
}

export default CommentReel;
