import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a final year Software Engineering undergraduate student at <b className="purple">Universiti Sains Malaysia (USM) </b>
              with an interest in developing applications, and also solving problems.
              <br/>
              <br/>
              My interests include <b className="purple">full-stack web development, AI applications, and embedded systems. </b> 
              I enjoy learning a lot of things such as cutting-edge technologies, linguistics, algorithms, 
              geography, meteorology, geology, history, political science, astronomy, and more! 
              Therefore, my intellectual interests are extremely wide!
              <br />
              <br />
              My main programming languages are
              <i>
                <b className="purple">
                  {" "}
                  JavaScript/TypeScript, C++, PHP, and Java,{" "}
                </b>
              </i>
              and I occasionally use languages like for specific projects related to AI or Embedded Systems, such as
                <b className="purple">
                    {" "}
                    Python, and C.{" "}
                </b>
                
              <br />
              <br />
              I also dabble in <b className="purple">Competitive Programming, Embedded Systems, and GIS </b>
              to reinforce and diversity my technical skills.
              <br />
              <br />
              I usually use
              <b className="purple"> Laravel, Next.Js or Spring Boot </b> as my frameworks to develop web applications.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
