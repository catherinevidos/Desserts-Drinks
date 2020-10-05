import React from "react";
import video1 from "../../public/videos/Desserts & Drinks Logo.mp4";
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
