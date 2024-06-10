import React from "react";
import "./end.css";

const End = () => {
  const handleVideoEnd = () => {
    window.location.href = "https://ankulcode.netlify.app/";
  };
  return (
    <>
      <div className="end-section">
        <video autoPlay onEnded={handleVideoEnd}>
          <source src="./Video 2.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default End;
