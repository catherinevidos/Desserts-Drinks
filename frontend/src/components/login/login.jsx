import React from 'react';
import Video from "./logo_2.mp4";
import {Link} from 'react-router-dom';
import './login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
  }

  demoUser(e) {
    e.preventDefault();
    this.props.login({
      email: 'demo@drinksdesserts.com',
      password: 'welcome1'
    })
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
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-video-container">
            <video autoPlay="autoplay" loop="loop" muted>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-form-child">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="email"
                  className="login-input"
                />

                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="password"
                  className="login-input"
                />

              <div className="signup-submit">
                <input type="submit" value="Login" />
              </div>

              <p className="login-or-message">OR</p>

              <div className="login-submit-demo">
                <button
                  onClick={(e) => {
                    this.demoUser(e);
                  }}
                >
                  Demo User
                </button>
              </div>

              {this.renderErrors()}

              <Link to="/signup" className="login-link">
                Not a Member? Click to Sign Up!;
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}