import React from "react";
import "./contact.scss";
import ContactUsForm from "./contactUsForm1";

const Contatus = () => {
  return (
    <div className="contactus-container">
    <div className="connect-me">
    <div className="connect-title">Get in touch</div>
        <div className="connect-description">
          I would love to hear about your project.<br/>Feel free to work together on
          a project,discuss Project ideas,or just friendly hello.
        </div>
    </div>
    <div className="form-container">
      <div className="left-container">
        <ContactUsForm/>
      </div>
      <div className="right-container"></div>
      
      </div>
    </div>
  );
};

export default Contatus;
