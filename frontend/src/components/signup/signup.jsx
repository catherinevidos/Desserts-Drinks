import React from "react";
import './signup.scss';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Signup extends React.Component {
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

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      username: this.state.username,
    };
    
    this.props.signupUser(user).then(() => this.props.history.push('/signup'));
  }

  renderErrors() {
    const { errors } = this.props;
    return (
      <ul>
        {Object.keys(errors).map((key, i) => (
          <li key={`error-${i}`}>{errors[key]}</li>
        ))}
      </ul>
    );
  }

  render() {
      
    return (
      <div className="login-top">
        <div className="login-wrapper">
          <div className="signup-container">
            <div>
              <div className="signup-logo-container">
                <img src="https://pxelation-seeds.s3.amazonaws.com/logo4.png" alt="" />
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
                    className="username-input"
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
                   <div className={'error-wrapper'}>
                      {this.renderErrors()}
                   </div>
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

export default withRouter(Signup);