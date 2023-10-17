import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiBootstrap,
  SiAntdesign,
  SiMaterialdesignicons,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  // Define a mapping of website names to colors
  const websiteColors = {
    Typescript: "#007ACC",
    JavaScript: "#F7DF1E",
    Nodejs: "#8CC84B",
    React: "#61DAFB",
    MongoDB: "#4DB33D",
    Git: "#F05032",
    Java: "#007396",
    Bootstrap: "#7952B3",
    Antdesign: "#108EE9",
    Materialdesignicons: "#2196F3",
    Nextdotjs: "#000000",
    Redis: "#DC382D",
    Firebase: "#FFA611",
    Solidity: "#313131",
  };

  const getIconColor = (websiteName) => {
    return websiteColors[websiteName] || "#000000";
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { icon: SiTypescript, text: "Typescript" },
        { icon: DiJavascript1, text: "JavaScript" },
        { icon: DiNodejs, text: "Nodejs" },
        { icon: DiReact, text: "React" },
        { icon: DiMongodb, text: "MongoDB" },
        { icon: DiGit, text: "Git" },
        { icon: DiJava, text: "Java" },
        { icon: SiBootstrap, text: "Bootstrap" },
        { icon: SiAntdesign, text: "Antdesign" },
        { icon: SiMaterialdesignicons, text: "Materialdesignicons" },
        { icon: SiNextdotjs, text: "Nextdotjs" },
        { icon: SiRedis, text: "Redis" },
        { icon: SiFirebase, text: "Firebase" },
        { icon: SiSolidity, text: "Solidity" },
      ].map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{
            backgroundColor: "white",
            border: "1px solid white",
          }}
        >
          <div className="tech-icon" style={{ color: getIconColor(tech.text) }} title={tech.text}>
            {tech.icon()}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
