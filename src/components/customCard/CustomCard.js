import Card from "react-bootstrap/Card";
import Rating from "../rating/Rating";
import "./customcard.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export const CustomCard = ({ name, year, title, id, url, summary, rating }) => {
  const {reviews} = useSelector(state => state.books)

  const [rate, setRate] = useState(5)

  useEffect(()=>{
    const ratings = reviews.filter(item => item?.bookId === id)

    
    if (ratings.length){
      const ttl = ratings.reduce((accu, item) => accu + +item.ratings, 0) / ratings.length
      setRate(ttl)
      
    }
  },[reviews, id])

  

  return (
    <Link to={`/book/${id}`} className="nav-link">
      <Card className="mt-5" style={{ width: "18rem", height:"46rem" }}>
        <Card.Img className="cardImg" variant="top" src={url} />
        <Card.Body>
          <Card.Title className="fw-bold title">{title}</Card.Title>
          <Card.Text>
            <h5 className="author"> 
              {name} - {year}
            </h5>

            <p>{summary.slice(0,100)+ "......"}</p>

          </Card.Text>
          <div className="card-rating">
          <Rating rate={rate }/>
          </div>
          
        </Card.Body>
      </Card>
    </Link>
  );
};