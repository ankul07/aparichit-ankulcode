import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import "./end.css";

const mainvideo =
  "https://res.cloudinary.com/dkgfdtk2v/video/upload/v1717646686/Video_2_ss3ymn.mp4";

const End = () => {
  const [loading, setLoading] = useState(true);
  const handleVideoEnd = () => {
    window.location.href = "https://ankulcode.netlify.app/";
  };

  useEffect(() => {
    const video = document.getElementById("video");
    video.onloadeddata = () => setLoading(false);
  }, []);
  return (
    <>
      <div className="end-section">
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
        <video id="video" autoPlay onEnded={handleVideoEnd}>
          <source src={mainvideo} type="video/mp4" />
        </video>
        ;
      </div>
    </>
  );
};

export default End;
