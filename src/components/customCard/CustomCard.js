import Card from "react-bootstrap/Card";
import Rating from "../rating/Rating";
import "./customcard.css"
import { Link } from "react-router-dom";


export const CustomCard = ({ name, year, title, id, url, summary, rating }) => {
  return (
    <Link to={`/book/${id}`} className="nav-link">
      <Card className="mt-5" style={{ width: "18rem", height:"44rem" }}>
        <Card.Img className="cardImg" variant="top" src={url} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>
            <h5>
              {name} - {year}
            </h5>

            <p>{summary.slice(0,100)+ "......"}</p>

          </Card.Text>
          <Rating  rate={4}/>
        </Card.Body>
      </Card>
    </Link>
  );
};