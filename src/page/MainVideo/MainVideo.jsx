import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainvideo.css";

const mainvideo =
  "https://res.cloudinary.com/dkgfdtk2v/video/upload/v1717632667/Video_1_g4cd60.mp4";
const MainVideo = () => {
  const navigate = useNavigate();
  const handleVideoEnd = () => {
    navigate("/form");
  };
  return (
    <div className="main-video">
      <video width="320" height="240" autoPlay onEnded={handleVideoEnd}>
        <source src={mainvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
