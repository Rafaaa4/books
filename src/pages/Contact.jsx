import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "boxicons/css/boxicons.min.css";
import "../style/Contact.css";

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u66fksp",
        "template_hmdcg3k",
        form.current,
        "SQ0KvnSgeBVU9o-Ct"
      )
      .then(
        () => {
          alert("Message sent successfully! 😁");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again. 😢");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have questions about our books or services? We'd love to hear from
          you.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Address</h3>
              <p>123 Book Street, Library District</p>
              <p>Reading City, RC 12345</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bx bx-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>info@bookhaven.com</p>
              <p>support@bookhaven.com</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bx bx-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-twitter"></i></a>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">Your Name</label>
                <input type="text" id="user_name" name="user_name" required />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Your Email</label>
                <input type="email" id="user_email" name="user_email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
