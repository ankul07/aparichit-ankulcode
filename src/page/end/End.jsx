import React from "react";
import "./end.css";
const mainvideo =
  "https://res.cloudinary.com/dkgfdtk2v/video/upload/v1717646686/Video_2_ss3ymn.mp4";

const End = () => {
  const handleVideoEnd = () => {
    window.location.href = "https://ankulcode.netlify.app/";
  };
  return (
    <>
      <div className="end-section">
        <video autoPlay onEnded={handleVideoEnd}>
          <source src={mainvideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default End;
