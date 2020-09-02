import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="/videos/vid.mp4"
        height="890"
      ></video>
    </div>
  );
}

export default Video;
