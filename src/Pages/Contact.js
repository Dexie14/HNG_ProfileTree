import "./Contact.css";
import I4G from "../Images/I4G.svg";
import ZuriInternship_Logo from "../Images/Zuri.Internship_Logo.svg";
import { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState("Send Message");

  function handleSubmit(evt) {
    evt.preventDefault();
    setValue("MESSAGE SENT");
  }

  return (
    <div className="Contact">
      <form onSubmit={handleSubmit}>
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <div className="NameInput">
          <div className="names">
            <label>First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              id="first_name"
              required
            />
          </div>
          <div className="names">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              id="last_name"
              required
            />
          </div>
        </div>
        <div className="Email">
          <label>Email</label>
          <input
            type="email"
            placeholder="yourname@email.com"
            id="email"
            required
          />
        </div>
        <div className="Message">
          <label>Message</label>
          <textarea
            id="message"
            required
            name="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            rows="7"
            cols="50"
          />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox" required />
          <p>
            You agree to providing your data to Adelu Adeoniye who may contact
            you.
          </p>
        </div>

        <button id="btn_submit">{value}</button>
      </form>
      <hr></hr>
      <footer>
        <img src={ZuriInternship_Logo} alt="ZuriInternship_Logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G" />
      </footer>
    </div>
  );
};

export default Contact;
