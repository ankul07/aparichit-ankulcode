import React, { useEffect, useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FormPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    crime: "",
    criminalname: "",
    age: "",
    identification: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://aparichitbackend-production.up.railway.app/form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log("Form data sent successfully:", response.data);
      navigate("/end");
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };
  useEffect(() => {
    const audio = new Audio("./Theme Song.mp3");
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the start
    };
  }, []);
  return (
    <>
      <section className="form-section">
        <div className="container">
          <form
            action="https://formspree.io/f/xayrgbwk"
            method="POST"
            className="form-box"
          >
            {step === 1 && (
              <div className="input-box">
                <label htmlFor="dosh">दोष</label>
                <input
                  type="text"
                  id="dosh"
                  name="crime"
                  required
                  value={formData.crime}
                  onChange={handleChange}
                />
                <button className="form-btn" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="input-box">
                <label htmlFor="dosh">दोषी का नाम</label>
                <input
                  type="text"
                  id="dosh"
                  name="criminalname"
                  required
                  value={formData.criminalname}
                  onChange={handleChange}
                />
                <button className="form-btn" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="input-box">
                <label htmlFor="dosh">उम्र</label>
                <input
                  type="text"
                  id="dosh"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                />
                <button className="form-btn" onClick={handleNext}>
                  Next
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="input-box">
                <label htmlFor="dosh">पहचान</label>
                <input
                  type="text"
                  id="dosh"
                  name="identification"
                  required
                  value={formData.identification}
                  onChange={handleChange}
                />
                <button
                  className="form-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default FormPage;
