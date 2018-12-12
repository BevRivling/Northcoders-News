import React, { Component } from "react";

class AddArticleForm extends Component {
  state = {
    topic: "",
    body: ""
  };
  render() {
    console.log(this.state);
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
            Body:
            <textarea onChange={this.handleBody} rows="10" cols="45" />
          </label>
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

  handleTopic = e => {
    const { value } = e.target;
    this.setState({
      topic: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.topic, ": ", this.state.body);
  };
}

export default AddArticleForm;
