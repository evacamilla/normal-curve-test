import React from 'react';
import VideoImage from '../images/Skärmavbild 2018-10-01 kl. 09.53.29.png';

function Video(props) {
  return (       
    <div className="video-div">
        <img src={VideoImage} alt="" />
    </div>
  );
}

export default Video;