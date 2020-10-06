import React from "react";
import ReactPlayer from 'react-player';


class Video extends React.Component {
  render() {
    return (
      <>
        <ReactPlayer
          className='react-player-logo'
          url='/logo.MP4'
          width="500px"
          height="500px"
          autoPlay={true}
        />
      </>
    );
  }
}

export default Video;
