import React, { Component } from "react";
import cog from "../img/cog.svg";
import AddArticleForm from "./AddArticleForm";

class SideFooter extends Component {
  state = {
    isFocused: false,
    focalPanel: ""
  };
  render() {
    let focalPanel;
    if (this.state.isFocused && this.state.focalPanel === "newArticle") {
      focalPanel = (
        <React.Fragment>
          <div className="grey-background" onClick={() => this.toggleFocus()} />
          <AddArticleForm
            topics={this.props.topics}
            focus={this.state.focalPanel}
          />
        </React.Fragment>
      );
    }
    return (
      <div className="side-footer">
        {focalPanel}
        <div
          onClick={() => {
            this.toggleFocus("newArticle");
          }}
          id="add-button"
        >
          +
        </div>
        <div
          onClick={() => {
            this.toggleFocus();
          }}
          id="settings"
        >
          <img src={cog} alt="settings" />
        </div>
      </div>
    );
  }

  toggleFocus = focalPoint => {
    this.setState(prevState => ({
      isFocused: !prevState.isFocused,
      focalPanel: focalPoint
    }));
  };
}

export default SideFooter;
