import React from 'react';
import Video from '../video/video';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
      <div className='login-wrapper'>
        <div className='login-container'>
          <div>
            <Video />
          </div>
        </div>
      </div>
    )
  }
}