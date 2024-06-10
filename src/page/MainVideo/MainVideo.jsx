import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainvideo.css";

const MainVideo = () => {
  const navigate = useNavigate();
  const handleVideoEnd = () => {
    navigate("/form");
  };
  return (
    <div className="main-video">
      <video width="320" height="240" autoPlay onEnded={handleVideoEnd}>
        <source src="./Video 1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
