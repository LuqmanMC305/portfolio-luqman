import { Container} from "react-bootstrap";
import AwardItem from "./AwardItem";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";


function Awards() {

  return (
    <div>
      <Particle />
        <Container fluid className="award-section">
          <h1>Awards and <strong className="purple">Honours</strong></h1>
          <Card.Body>
            <div className="award-content">
              <AwardItem
                title="Dean's List Award"
                subtitle="For X Semesters"
              />

                <AwardItem
                title="Dean's List Award"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />

              <AwardItem
                title="Dean's List Award"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />

              <AwardItem
                title="Dean's List Award"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              
            </div>
          </Card.Body>
        </Container>
    </div>
  );
}

export default Awards;
