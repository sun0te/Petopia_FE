import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../Styles/RecomendStyle.css";
import { BsEye, BsHandThumbsUp, BsPerson } from "react-icons/bs";

const Recomend_best = (props) => {
  const toBest = () => {
    window.location.href = "/recomend_best";
  };

  return (
    <>
      <Card
        className="recommendCard"
        style={{ width: "18rem" }}
        onClick={toBest}
      >
        <Card.Img variant="top" src={props.picture} />
        <Card.Body className="recommendCardBody">
          <Card.Title className="recommendCardTitle">{props.title}</Card.Title>
          <Card.Text className="recommendBestCardText">
            <p className="p_recommendWriter">
              <BsPerson className="recommendIcon" /> {props.writer}
            </p>
            <BsEye className="recommendIcon" />
            &nbsp; {props.view} &nbsp;&nbsp;
            <BsHandThumbsUp className="recommendIcon" />
            &nbsp; {props.like}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Recomend_best;
