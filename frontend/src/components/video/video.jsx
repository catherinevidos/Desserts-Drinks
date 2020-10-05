import React from "react";
import ReactPlayer from 'react-player';


class Video extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer
          className='react-player logo'
          url='videos/logo.MP4'
          width="500px"
          height="500px"
          autoplay="true"
        />
      </div>
    );
  }
}

export default Video;
