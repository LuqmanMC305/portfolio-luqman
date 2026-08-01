import Card from "react-bootstrap/Card";

function TimelineItem({
    logo,
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

          {/* Company logo */}
            {logo && (
                <img
                src={logo}
                alt={`${company} logo`}
                className="company-logo"
                />
            )}

          <Card.Title className="card-title-company">{title}</Card.Title>

          <Card.Subtitle className="card-company">
            {company}
          </Card.Subtitle>

          <Card.Text className="card-text-desc">
            {description}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
        
    );
}

export default TimelineItem;