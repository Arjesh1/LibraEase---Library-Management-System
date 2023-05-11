import Card from "react-bootstrap/Card";
import Rating from "../rating/Rating";


export const CustomCard = ({ name, year, title, id, url, summary, rating }) => {
  return (
    <>
      <Card className="mt-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>
            <h5>
              {name} - {year}
            </h5>

            <p>{summary.slice(0,100)+ "..."}</p>

          </Card.Text>
          <Rating rate={4}/>
        </Card.Body>
      </Card>
    </>
  );
};