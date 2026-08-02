import Card from "react-bootstrap/Card";
import { CgAwards} from "react-icons/cg";

function AwardItem({
    title,
    subtitle,
}){
    return (
    <div>

      <Card className="award-card">
        <Card.Body className="award-card-body">
           <div className="award-header">
            <CgAwards className="award-icon" />
            <Card.Title className="award-title">{title}</Card.Title> 
          </div>
          
          <Card.Text className="card-text-desc">
            {subtitle}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
        
    );
}

export default AwardItem;