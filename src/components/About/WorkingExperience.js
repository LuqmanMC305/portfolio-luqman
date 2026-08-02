import React from "react";
import Card from "react-bootstrap/Card";
import abnlogo from "../../Assets/Organisations/abn_logo.jpg";
import veecotechlogo from "../../Assets/Organisations/veecotech_logo.jpg";
import TimelineItem from "./TimelineItem";
import { ImPointRight } from "react-icons/im";

function WorkingExperience() {
  return (
    <Card className="experience-card">
      <Card.Body>
        <blockquote className="blockquote mb-0 mt-2">
          <div className="timeline">
            <TimelineItem
              logo= {veecotechlogo}
              period="Mar 2025 - Sep 2025"
              title="Software Developer Internship"
              company="VeecoTech Solutions Sdn. Bhd."
              description="Developed and maintained software applications by analysing requirements, solving technical problems, and producing clean, maintainable code."
            />

            <TimelineItem
              logo = {abnlogo}
              period="Mar 2025 - Sep 2025"
              title="Software Developer Internship"
              company="Advanced Binary Networks Sdn Bhd"
              description="Created weekly reports and learnt basic frontend development such as HTML/CSS, JavaScript, and PHP (Laravel), and XAMPP local server."
            />
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WorkingExperience;
