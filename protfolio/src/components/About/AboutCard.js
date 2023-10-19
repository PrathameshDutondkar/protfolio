import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import pdf from "../../Assets/Frontend_developer_Prathamesh's_Resume.pdf"; // Replace with the correct path to your CV PDF

function AboutCard() {
  // Function to handle the CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Prathamesh_Dutondkar_Resume.pdf"; // Change the filename as desired
    link.click();
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Prathamesh Dutondkar </span>
            from <span className="purple">Pune, India.</span>
            <br /> I have nearly one year of experience as a ReactJs
            Developer.
            <br />
            Additionally, I am currently employed as a software developer at
            Perpetualblock Technology Pvt Ltd.
            <br />
            <br />
            <span className="purple">Tech Stack:-</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              &nbsp; JavaScript Library: ReactJs, NextJs
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; CSS Framework: Antd, MaterialUi, BootStrap, Taliwind
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Version Control: Git
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prathamesh Dutondkar</footer>
        </blockquote>
      </Card.Body>
      <div className="button-container" style={{ flexWrap: "wrap" }}>
        <button className="button button1" style={{ cursor: "pointer" }} onClick={handleDownloadCV}>
          Download CV
        </button>
      </div>
    </Card>
  );
}

export default AboutCard;
