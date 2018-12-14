import React, { Component } from "react";
import * as api from "../api";
import { navigate } from "@reach/router";

class AddArticleForm extends Component {
  state = {
    title: "",
    topic: "",
    body: ""
  };
  render() {
    return (
      <div
        className={`${
          this.props.focus === "newArticle"
            ? "move-up add-article"
            : "add-article"
        }`}
      >
        <h4>Post New Article</h4>

        <form>
          <label>
            Title:
            <input type="text" onChange={this.handleTitle} />
          </label>
          <br />
          <label>
            Body:
            <textarea onChange={this.handleBody} rows="10" cols="45" />
          </label>
          <br />
          <label>
            Topic:
            <select value={this.state.topic} onChange={this.handleTopic}>
              <option value="" />
              {this.props.topics.map(topic => {
                if (topic === this.state.topic)
                  return (
                    <option selected="selected" value={topic.slug}>
                      {topic.slug}
                    </option>
                  );
                return <option value={topic.slug}>{topic.slug}</option>;
              })}
            </select>
          </label>
          <button onClick={this.handleSubmit}>POST</button>
        </form>
      </div>
    );
  }

  handleBody = e => {
    const { value } = e.target;
    this.setState({
      body: value
    });
  };

  handleTitle = e => {
    const { value } = e.target;
    this.setState({
      title: value
    });
  };

  handleTopic = e => {
    const { value } = e.target;
    this.setState({
      topic: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const article = {
      title: this.state.title,
      topic: this.state.topic,
      body: this.state.body,
      created_by: localStorage.user,
      created_at: Date.now()
    };

    if (!article.title || !article.topic || !article.body) {
      alert(
        "Please fill out all of the input fields before posting a new topic."
      );
    } else if (!article.created_by) {
      alert("Make sure you are signed in!");
    } else {
      this.postArticle(article);
    }
  };

  postArticle = article => {
    api
      .postArticleByTopicSlug(article, this.state.topic)
      .then(postedArticle => {
        alert(`${postedArticle.data.title} has been successfully posted`);
        this.props.toggleFocus("");
        navigate(`/articles/${postedArticle.data.topic}`);
      });
  };
}

export default AddArticleForm;
