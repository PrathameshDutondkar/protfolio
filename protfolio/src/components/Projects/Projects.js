import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/prathamesh-protfolio.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import Nike from "../../Assets/Projects/Nike.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PB-Website"
              description="The PerpetualBlock Technology company website is built with ReactJS and utilizes Google Tag Manager for visitor tracking. It features a contact form that operates without a backend, ensuring visitor data privacy while capturing essential contact information. The site's design is enriched with the Ant Design library for a sleek and user-friendly experience. "
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://perpetualblock.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Invoice Generator"
              description="
              An invoice generator project is a software tool that simplifies the invoicing process. It enables users to create professional invoices, input invoice details, and calculate totals automatically. Features include client management, invoice tracking, and export options for efficient billing and financial record-keeping. This tool is essential for businesses and freelancers to streamline their financial transactions.              
              "
              ghLink="https://github.com/PrathameshDutondkar/invoice-generator.git"
              demoLink="https://invoice-generator-prathamesh.netlify.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix clone"
              description="Create a Netflix clone as a frontend web application to showcase your skills in HTML, CSS, and JavaScript. The Netflix clone will replicate the key features and aesthetics of the popular streaming platform. It will allow users to browse a catalog of movies and TV shows, view detailed information about each title, and experience a responsive, user-friendly design."
                            ghLink="https://github.com/PrathameshDutondkar/Netflix-clone.git"
              demoLink="https://netfilxsite-clone.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Protfolio"
              description="Create a responsive portfolio website using Bootstrap CSS Framework with a contact form that sends messages to my email address and Google Tag Manager to track website traffic user details such as location and time spent on website."
              ghLink="https://github.com/PrathameshDutondkar/Portfolio.git"
              demoLink="https://prathamesh-protfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nike}
              isBlog={false}
              title="Nike Landing Page"
              description="Create Nike Landing page by using vite,Tailwindcss and make that [page mobile responsive"
              ghLink="https://github.com/PrathameshDutondkar/Nikeclone.git"
              demoLink="https://nikelandingpagebyprathamesh.netlify.app/" 
            />
          </Col>

         {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
