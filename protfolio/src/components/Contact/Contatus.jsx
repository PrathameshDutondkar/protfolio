import React from "react";
import "./contact.scss";
import ContactUsForm from "./contactUsForm1";

const Contatus = () => {
  return (
    <div className="contactus-container">
      <div className="left-container">
        <div className="connect-title">Let's Connect</div>
        <div className="connect-description">
          I would love to hear about your project.<br/>Feel free to work together on
          a project,discuss Project ideas,or just friendly hello.
        </div>
      </div>
      <div className="right-container"><ContactUsForm/></div>
    </div>
  );
};

export default Contatus;
