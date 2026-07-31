import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Luqman Afizar</span>{" "}
            from <span className="purple">Penang, Malaysia</span>.
            <br />
            I recently finished my undergraduate degree in{" "}
            <span className="purple">Bachelor of Software Engineering in Honours</span> at{" "}
            <span className="purple">Universiti Sains Malaysia (USM)</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            engaged such as:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> I read a lot, history, tech, you name it. 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football, Especially The Premier League ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Fantasy Premier League (FPL) 🧠⚽
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trust the process and embrace the journey. Let the destination surprise you."{" "}
          </p>
          <footer className="blockquote-footer">Luqman Afizar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
