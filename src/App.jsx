import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import MainVideo from "./page/MainVideo/MainVideo";
import FormPage from "./page/formPage/FormPage";
import End from "./page/end/End";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<MainVideo />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </>
  );
};

export default App;
