import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    comment: ""
  };
  render() {
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
    console.log(finalComment);
    this.props.postComment(this.props.article_id, finalComment);
    //
  };
}

export default CommentForm;
