import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";
import "../../Styles/RecomendStyle.css";

const Recomend_Viewall = () => {
  const pagination = () => {
    for (let i = 2; i <= 10; i++) {
      <Pagination.Item>{i}</Pagination.Item>;
    }
  };

  return (
    <div className="listGroup">
      <ListGroup className="listGroup">
        <ListGroup.Item className="w-80 recommendListItem">
          <img className="listGroupImg" src="img/recommend_best1.png" />
          <div className="listGroupText">fasd fasd</div>
        </ListGroup.Item>
        <ListGroup.Item className="w-80 recommendListItem">
          <img className="listGroupImg" src="img/recommend_best1.png" />
          <div className="listGroupText">Dapibus ac facilisis in</div>
        </ListGroup.Item>
        <ListGroup.Item className="w-80 recommendListItem">
          <img className="listGroupImg" src="img/recommend_best1.png" />
          <div className="listGroupText">Morbi leo risus</div>
        </ListGroup.Item>
        <ListGroup.Item className="w-80 recommendListItem">
          <img className="listGroupImg" src="img/recommend_best1.png" />
          <div className="listGroupText">Porta ac consectetur ac</div>
        </ListGroup.Item>
        <ListGroup.Item className="w-80 recommendListItem">
          <img className="listGroupImg" src="img/recommend_best1.png" />
          <div className="listGroupText">Vestibulum at eros</div>
        </ListGroup.Item>
      </ListGroup>

      <div className="pagination">
        <Pagination className="pagenation">
          <Pagination.First />
          <Pagination.Prev />

          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export default Recomend_Viewall;
