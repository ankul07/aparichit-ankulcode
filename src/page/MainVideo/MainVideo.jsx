import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import "./mainvideo.css";

const mainvideo =
  "https://res.cloudinary.com/dkgfdtk2v/video/upload/v1717632667/Video_1_g4cd60.mp4";
const MainVideo = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleVideoEnd = () => {
    navigate("/form");
  };

  useEffect(() => {
    const video = document.getElementById("video");
    video.onloadeddata = () => setLoading(false);
  }, []);
  return (
    <div className="main-video">
      {loading && (
        <div className="loader-container">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="loading"
            wrapperStyle={{}}
            wrapperClass="loader"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      <video
        id="video"
        width="320"
        height="240"
        autoPlay
        onEnded={handleVideoEnd}
      >
        <source src={mainvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
