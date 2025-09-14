import React from "react";
import "../style/About.css";
import aboutImage from "../assets/228cd59f2770f903afb85809ea52804b.jpg"; // replace with your image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Discover more about our mission, vision, and values. We are passionate
          about books and technology, bringing knowledge closer to everyone.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>

        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a modern, intuitive platform where users
            can discover and explore books from all genres. We aim to make
            knowledge accessible to everyone.
          </p>

          <h2>Our Vision</h2>
          <p>
            To become the leading online platform for book discovery and
            education, combining technology and literature to inspire learning.
          </p>

          <h2>Our Values</h2>
          <p>
            Innovation, accessibility, and user experience are at the core of
            everything we do. We believe in continuous improvement and
            creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
