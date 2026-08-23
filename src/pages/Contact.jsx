import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields before sending your message.");
      return;
    }

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Thanks! Your email app should open with your message ready to send.",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section">
      <h2>Contact Me</h2>
      <div className="summary-box contact-card">
        <p>
          <strong>📞 Phone:</strong> {personalInfo.phone}
        </p>
        <p>
          <strong>📧 Email:</strong> {personalInfo.email}
        </p>
        <p>
          <strong>📍 Address:</strong> {personalInfo.address}
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
            />
          </div>
          <button type="submit" className="download-cv-btn">
            Send Message
          </button>
          {status ? <p className="status-message">{status}</p> : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;
