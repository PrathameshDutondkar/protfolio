import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prathamesh Dutondkar </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I have a nearly one year of experience as a ReactJs Developer.
            <br />
            Additionally, I am currently employed as a software developer at
            Perpetualblock Technology Pvt Ltd.
            <br />
            <br />
           <span className="purple">Tech Stack:-</span> 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />&nbsp;  JavaScript Framework :- ReactJs,NextJs
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; CSS Framework :- Antd,MaterialUi,BootStrap,Taliwind,
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Version Contral- Git
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">prathamesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
