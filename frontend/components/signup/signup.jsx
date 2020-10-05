import React from "react";
import Video from "../video/video";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: ""
    };
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
          <div className='signup-logo-video'>
            <Video />
          </div>

          <form onSubmit={this.handleSubmit} className="signup-form">
            <div className="signup-form-child">

              <label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="email"
                  className="signup-input"
                />
              </label>

              <label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="password"
                  className="signup-input"
                />
              </label>

              <div className="signup-submit">
                <input type="submit" value='Signup' />
              </div>

              </div>

              {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}
