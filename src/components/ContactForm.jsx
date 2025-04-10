import React from "react";
import "../styles/ContactForm.css";
import Earth from "./Earth";

const ContactForm = () => {
  return (
    <div className="contact-container">
        <Earth/>
        <div className="contact-form-container" id="contact">
      <h2>Let's Connect!</h2>
      <form 
        action="https://getform.io/f/apjnymja" 
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    
    </div>
  );
};

export default ContactForm;
