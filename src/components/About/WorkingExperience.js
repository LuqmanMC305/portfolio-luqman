import React from "react";
import Card from "react-bootstrap/Card";
import TimelineItem from "./TimelineItem";
import { ImPointRight } from "react-icons/im";

function WorkingExperience() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 mt-2">
          <TimelineItem
            period="Mar 2025 - Sep 2025"
            title="Software Developer Internship"
            company="VeecoTech Solutions Sdn. Bhd."
            description="Developed and maintained software applications by analysing requirements, solving technical problems, and producing clean, maintainable code."
          />

          <TimelineItem
            period="Mar 2025 - Sep 2025"
            title="Software Developer Internship"
            company="Advanced Binary Networks Sdn Bhd"
            description="Created weekly reports and learnt basic frontend development such as HTML/CSS, JavaScript, and PHP (Laravel), and XAMPP local server."
          />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WorkingExperience;
