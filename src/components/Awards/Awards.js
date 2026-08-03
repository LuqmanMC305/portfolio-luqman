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
                title="Runner Up & The Most Robust Design Awards (State Level) "
                subtitle="Boulder Fence Model Design Competition Engineering Week 2019"
              />

                <AwardItem
                title="AKPK Club Excellence in Financial Literacy"
                subtitle="AKPK Collaborators’ Awards 2023/24"
              />

              <AwardItem
                title="Runner-Up"
                subtitle="Runner Up in the Penang State Consumer Movement Awards"
              />

              <AwardItem
                title="Dean's List Award"
                subtitle="For 5 Semesters"
              />
              
            </div>
          </Card.Body>
        </Container>
    </div>
  );
}

export default Awards;
