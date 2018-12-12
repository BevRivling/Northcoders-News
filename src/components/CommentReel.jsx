import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../api";

class CommentReel extends Component {
  state = {
    comments: [{ author: "", votes: 0, body: "" }],
    currentComment: 0
  };

  render() {
    return (
      <div className="wrapper">
        <div className="comment-reel">
          <button onClick={() => this.changeComment("previous")}>&lt;</button>
          <CommentCard
            comment={this.state.comments[this.state.currentComment]}
          />

          <button onClick={() => this.changeComment("next")}>&gt;</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getComments(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentComment !== prevState.currentComment) {
      this.getComments(this.props.id);
    }
    if (this.props.commentToPost !== prevProps.commentToPost) {
      this.getComments(this.props.id);
    }
  }

  getComments = id => {
    api.getCommentsByArticleId(id).then(comments => {
      this.setState({
        comments
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
}

export default CommentReel;
