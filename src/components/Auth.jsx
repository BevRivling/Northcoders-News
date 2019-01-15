import React, { Component } from "react";
import redLogo from "../img/nc-logo.png";

class Auth extends Component {
  state = {
    username: "happyamy2016",
    password: "test"
  };

  render() {
    const { usernameCorrect, passwordCorrect } = this.props;
    const userValidation = usernameCorrect ? (
      <p />
    ) : (
      <React.Fragment>
        <p className="form-error">Please insert a valid username.</p>
        <p className="form-error">
          Have you considered 'happyamy2016', 'cooljmessy', or 'weegembump'?
        </p>
      </React.Fragment>
    );

    const passValidation = passwordCorrect ? (
      <p />
    ) : (
      <p className="form-error">Please insert a password.</p>
    );

    return (
      <div className="grey-background">
        <div className="login">
          <img id="login-logo" alt="northcoders logo" src={redLogo} />
          <form id="login-form">
            <label>
              Username:
              <input
                onChange={this.handleUsername}
                value={this.state.username}
                type="text"
              />
            </label>
            <label>
              Password:
              <input
                onChange={this.handlePassword}
                value={this.state.password}
                type="password"
              />
            </label>
            <button onClick={this.handleSubmit} type="submit">
              Login
            </button>
            {userValidation}
            {passValidation}
          </form>
        </div>
      </div>
    );
  }

  handleUsername = e => {
    const { value } = e.target;
    this.setState({
      username: value
    });
  };
  handlePassword = e => {
    const { value } = e.target;
    this.setState({
      password: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const loginDetails = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.attemptLogin(loginDetails);
    this.setState({
      password: ""
    });
  };
}

export default Auth;
