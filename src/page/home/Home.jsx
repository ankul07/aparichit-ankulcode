import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <img
          src="https://res.cloudinary.com/dkgfdtk2v/image/upload/v1717646760/pxfuel_dkfvnt.jpg"
          alt="image"
          className="hero-image"
        />
        <div className="container">
          <h2 className="hero-title">
            कलयुग अपने अंतिम चरण पर पहुँच चुका है। पाप का घड़ा भर चुका है। सबको
            अपने पापों का प्रायश्चित करवाने अपरिचित आ रहा है।
          </h2>

          <NavLink to="/video" className="hero-btn">
            Enter
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
