import React, { useState } from "react";
import "./Video.css";
import { useRef } from "react";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="/videos/vid.mp4"
        height="890"
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
