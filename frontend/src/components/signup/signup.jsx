import React from "react";
import './signup.scss';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

// const intitialState = {
//   emailError: "",
//   passwordError: "",
//   usernameError: ""
// };

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

  // renderErrors() {
  //   let emailError = "";
  //   let passwordError = "";
  //   let usernameError = "";
  //   let password = this.state.password;
  //   let password2 = this.state.password2;
  //   let username = this.state.username;
  //   let email = this.state.email;
  //   const splitOnAt = email.split("@");
  //   const splitOnDot = email.split(".");

  //   if (
  //     !email.includes("@") ||
  //     !email.includes(".") ||
  //     splitOnAt.length > 2 ||
  //     splitOnDot[splitOnDot.length - 1].length < 2 ||
  //     email === ""
  //   ) {
  //     emailError = "Enter a valid email.";
  //   }

  //   if (username.includes("!@#$%^&*()-+=~`:;'/.,")) {
  //     usernameError = "username cannot contain symbols";
  //   } else if (
  //     splitOnAt.length > 2 ||
  //     splitOnDot[splitOnDot.length - 1].length < 2 ||
  //     username === ""
  //   ) {
  //     usernameError = "Enter a valid username";
  //   }

  //   if (password.length === 0) {
  //     passwordError = "Password is required";
  //   } else if (password.length < 6) {
  //     passwordError =
  //       "Your password must be at least 6 characters. Please try again.";
  //   } else if (password !== password2) {
  //     passwordError = "Passwords do not match";
  //   }
  //   if (passwordError || emailError || usernameError) {
  //     this.setState({ passwordError, emailError, usernameError });
  //     return false;
  //   }
  //   return true;
  // }

  // componentDidMount() {
  //   this.props.clearErrors();
  // }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.clearErrors();
    // const errors = this.renderErrors();
    // if (errors) {
    //   this.setState({ intitialState });
    // }
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      username: this.state.username,
    }
    
    this.props.signupUser(user).then(() => this.props.history.push('/'));
    // this.props.signupUser(user).then(() => this.props.history.push('/'));
  }

  //   componentDidUpdate() {
  //   if (Object.keys(this.props.currentUser).length !== 0) {
  //     this.props.clearErrors();
  //   }
  // }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((key, i) => (
          <li key={`error-${i}`}>{this.props.errors[key]}</li>
        ))}
      </ul>
    );
  }

  // componentDidUpdate() {
  //   this.props.clearErrors();
  // }

  render() {
    // const errorNameEmail =
    //   this.state.emailError !== "" ? "errors-present" : "no-errors";
    // const errorNamePassword =
    //   this.state.passwordError !== "" ? "errors-present" : "no-errors";
    // const errorNameUsername = 
    //   this.state.usernameError !== "" ? "errors-present" : "no-errors"
    //   let classname;
    //   if (this.state.emailError !== "" || this.state.passwordError !== "" || this.state.usernameError !== "") {
    //     classname = "error-wrapper"
    //   } else {
    //     classname = "no-errors"
    //   }
      
    return (
      <div className="login-top">
        <div className="login-wrapper">
          <div className="signup-container">
            <div>
              {/* <div className={'error-wrapper'}>
                {/* <p className={errorNameEmail}>{this.state.emailError}</p>
                <p className={errorNamePassword}>{this.state.passwordError}</p>
                <p className={errorNameUsername}>{this.state.usernameError}</p> */}
                {/* {this.renderErrors()}
              </div> */}
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
                   <div className={'error-wrapper'}>
                      {this.renderErrors()}
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

export default withRouter(Signup);