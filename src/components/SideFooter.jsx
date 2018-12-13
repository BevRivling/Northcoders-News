import React, { Component } from "react";
import cog from "../img/cog.svg";
import AddArticleForm from "./AddArticleForm";
import SettingsForm from "./SettingsForm";

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
            user={this.props.user}
            toggleFocus={this.toggleFocus}
            topics={this.props.topics}
            focus={this.state.focalPanel}
          />
        </React.Fragment>
      );
    }

    if (this.state.isFocused && this.state.focalPanel === "chooseSettings") {
      focalPanel = (
        <React.Fragment>
          <div className="grey-background" onClick={() => this.toggleFocus()} />
          <SettingsForm
            changeOrder={this.props.changeOrder}
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
            this.toggleFocus("chooseSettings");
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
