import Card from "react-bootstrap/Card";

function TimelineItem({
    period,
    title,
    company, 
    description,
}){
    return (
        <div className="timeline-item">
        {/* Timeline dot */}

         {/* Experience card */}
      <Card className="timeline-card">
        <Card.Body>

          <div className="timeline-period">
            {period}
          </div>

          <Card.Title>{title}</Card.Title>

          <Card.Subtitle className="mb-3 text-muted">
            {company}
          </Card.Subtitle>

          <Card.Text>
            {description}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
        
    );
}

export default TimelineItem;