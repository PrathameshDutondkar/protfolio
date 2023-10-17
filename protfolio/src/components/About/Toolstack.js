import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJira
} from "react-icons/si";

function Toolstack() {
  // Define the colors for each icon
  const iconColors = {
    SiVisualstudiocode: "#007ACC",  // Replace with your desired color
    SiPostman: "#FF6C37",  // Replace with your desired color
    SiSlack: "#4A154B",    // Replace with your desired color
    SiVercel: "#000000",   // Replace with your desired color
    SiJira: "#0052CC"      // Replace with your desired color
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ background: "white", border: "1px solid white" }}>
        <SiVisualstudiocode style={{ color: iconColors.SiVisualstudiocode }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ background: "white", border: "1px solid white" }}>
        <SiPostman style={{ color: iconColors.SiPostman }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ background: "white", border: "1px solid white" }}>
        <SiSlack style={{ color: iconColors.SiSlack }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ background: "white", border: "1px solid white" }}>
        <SiVercel style={{ color: iconColors.SiVercel }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ background: "white", border: "1px solid white" }}>
        <SiJira style={{ color: iconColors.SiJira }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
