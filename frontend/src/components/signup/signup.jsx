import React from "react";
import './signup.scss';
import Video from "./logo.mp4";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      password2: ""
    };

    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    
    return (
      <div className="signup-wrapper">
        <div className="signup-container">
          <div className="signup-logo-video">
            <video autoPlay="autoplay" loop="loop" muted>
              <source src={Video} type="video/mp4" />
            </video>
          </div>

          <form onSubmit={this.handleSubmit} className="signup-form">
            <div className="signup-form-child">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="email"
                className="signup-input"
              />

              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="username"
                className="signup-input"
              />

              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="password"
                className="signup-input"
              />

              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="retype password"
                className="signup-input"
              />

              <div className="signup-submit">
                <input type="submit" value="Signup" />
              </div>
            </div>

            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}
