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
import monitus from "../../Assets/Projects/monitus.png";
import usmmarketplace4u from "../../Assets/Projects/usmmarketplace4u.png";
import campusconnect from "../../Assets/Projects/campusconnect.png";
import anprsmartparking from "../../Assets/Projects/anpr-smartparking.png";
import hangman from "../../Assets/Projects/hangman.png";
import portfolio from "../../Assets/Projects/portfolio.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Notable <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I already worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitus}
              isBlog={false}
              title="Monitus"
              description="Localised emergency alert platform with geofencing, real-time notifications and an admin dashboard, using Flutter, Laravel, PostgreSQL, and Firebase Cloud Messaging (FCM). Awarded the Bronze Award at the PIXEL 2026 Final Year Project Competition."
              ghLink="https://github.com/LuqmanMC305/monitus-project"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campusconnect}
              isBlog={false}
              title="Campus Connect"
              description="Interactive web platform that centralises USM campus events using a map interface. Students can browse, filter and submit events for administrator approval. It was part of one of the university group assignment. The used tech stack are Vite, TypeScript, and Firebase Cloud Storage."
              ghLink="https://github.com/Raxatal/CampusConnect-Py4"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usmmarketplace4u}
              isBlog={false}
              title="USM Marketplace4U"
              description="Student recommerce platform for buying and selling second-hand items, powered by Next.Js and Firebase Cloud Storage."
              ghLink="https://github.com/LuqmanMC305/usmmarketplace4u"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anprsmartparking}
              isBlog={false}
              title="ANPR Smart Parking System"
              description="AI-powered parking management system using YOLOv8 and OCR for real-time licence plate recognition. Includes payment dashboard and Flask API. Achieved Technology Readiness Level (TRL) 4 during university startup accelerator testing. This project was a collaboration with the NexT Seed Group."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangman}
              isBlog={false}
              title="Hangman Game"
              description="A text-based hangman game coded in C++."
              ghLink="https://github.com/LuqmanMC305/hangman-game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio Website"
              description="The designed is forked and based on soumyajit4419's Portfolio Website. The original work can be found on the right button below."
              ghLink="https://github.com/LuqmanMC305/portfolio-luqman"
              originalLink = "https://github.com/soumyajit4419/Portfolio"
              //demoLink="https://blogs.soumya-jit.tech/"      
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
