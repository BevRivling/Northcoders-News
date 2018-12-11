import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../api";

class CommentReel extends Component {
  state = {
    comments: [{ author: "bevan", votes: 20, body: "hey" }],
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
    console.log(this.state.comments[this.state.currentComment]);
    if (this.state.currentComment !== prevState.currentComment) {
      console.log("should be changing!");
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
    console.log(this.state);
    this.setState(prevState => {
      currentComment: direction === "next"
        ? prevState.currentComment++
        : prevState.currentComment--;
    });
  };
}

export default CommentReel;
