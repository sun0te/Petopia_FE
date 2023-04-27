import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../Styles/RecomendStyle.css";

const Recomend_best = (props) => {
  const toBest = () => {
    window.location.href = "/recomend_best";
  };

  return (
    <>
      <Card className="card" style={{ width: "18rem" }} onClick={toBest}>
        <Card.Img variant="top" src={props.picture} />
        <Card.Body>
          <Card.Title className="cardTitle">{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Recomend_best;
