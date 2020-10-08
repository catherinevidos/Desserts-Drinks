import React from "react";
import './signup.scss';
import {Link} from 'react-router-dom'
import Pic from './logo4.png';

const intitialState = {
  emailError: "",
  passwordError: "",
  usernameError: ""
};

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderErrors() {
    let emailError = "";
    let passwordError = "";
    let usernameError = "";
    let password = this.state.password;
    let password2 = this.state.password2;
    let username = this.state.username;
    let email = this.state.email;
    const splitOnAt = email.split("@");
    const splitOnDot = email.split(".");

    if (
      !email.includes("@") ||
      !email.includes(".") ||
      splitOnAt.length > 2 ||
      splitOnDot[splitOnDot.length - 1].length < 2 ||
      email === ""
    ) {
      emailError = "Enter a valid email.";
    }

    if (username.includes("!@#$%^&*()-+=~`:;'/.,")) {
      usernameError = "username cannot contain symbols";
    } else if (
      splitOnAt.length > 2 ||
      splitOnDot[splitOnDot.length - 1].length < 2 ||
      username === ""
    ) {
      usernameError = "Enter a valid username";
    }

    if (password.length === 0) {
      passwordError = "Password is required";
    } else if (password.length < 6) {
      passwordError =
        "Your password must be at least 6 characters. Please try again.";
    } else if (password !== password2) {
      passwordError = "Passwords do not match";
    }
    if (passwordError || emailError || usernameError) {
      this.setState({ passwordError, emailError, usernameError });
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = this.renderErrors();
    if (errors) {
      this.setState({ intitialState });
    }
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      username: this.state.username,
    };
    this.props.signupUser(user);
  }

  render() {
    const errorNameEmail =
      this.state.emailError !== "" ? "errors-present" : "no-errors";
    const errorNamePassword =
      this.state.passwordError !== "" ? "errors-present" : "no-errors";
    const errorNameUsername = 
      this.state.usernameError !== "" ? "errors-present" : "no-errors"
      let classname;
      if (this.state.emailError !== "" || this.state.passwordError !== "" || this.state.usernameError !== "") {
        classname = "error-wrapper"
      } else {
        classname = "no-errors"
      }
      
    return (
      <div className="login-top">
        <div className="login-wrapper">
          <div className="signup-container">
            <div>
              <div className={classname}>
                <p className={errorNameEmail}>{this.state.emailError}</p>
                <p className={errorNamePassword}>{this.state.passwordError}</p>
                <p className={errorNameUsername}>{this.state.usernameError}</p>
              </div>
              <div className="signup-logo-container">
                <img src={Pic} alt="" />
              </div>
              <form onSubmit={this.handleSubmit} className="signup-form">
                <div className="signup-form-child">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="login-input"
                  />
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Username"
                    className="login-input"
                  />
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="login-input"
                  />
                  <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                    className="login-input"
                  />

                  <div className="button-container">
                    <div className="login-submit">
                      <input type="submit" value="Signup" />
                    </div>
                  </div>
                  {/* <div className={classname}>
                    <p className={errorNameEmail}>{this.state.emailError}</p>
                    <p className={errorNamePassword}>
                      {this.state.passwordError}
                    </p>
                    <p className={errorNameUsername}>
                      {this.state.usernameError}
                    </p>
                  </div> */}

                  <Link to="/login" className="login-link">
                    Have an account? Click to Log in!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}