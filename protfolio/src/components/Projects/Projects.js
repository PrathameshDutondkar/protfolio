import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="Editor.io"
              description="The Netlify clone   is a web hosting and deployment platform that emulates the functionality and user experience of Netlify, a popular cloud-based service. It allows developers to seamlessly host, build, and deploy their websites and applications. This project showcases my skills in creating a simplified yet effective hosting solution, making it an attractive addition to my portfolio for web development and cloud deployment expertise"
              ghLink="https://github.com/PrathameshDutondkar/Netflix-clone.git"
              demoLink="https://netfilxsite-clone.netlify.app/"              
            />
          </Col>

         {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
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
