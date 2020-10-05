import React from "react";
import Video from "../video/video";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
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
          <div>
            <Video />
          </div>
        </div>
      </div>
    );
  }
}
