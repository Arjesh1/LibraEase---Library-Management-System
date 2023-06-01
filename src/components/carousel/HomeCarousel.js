import Carousel from "react-bootstrap/Carousel";
import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/c.jpg";
import "./carouse.css";

export const HomeCarousel = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img className="d-block w-100" src={a} alt="First slide" />
      <Carousel.Caption >
        <h3>Unlock the World of Knowledge.</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={b} alt="Second slide" />

      <Carousel.Caption>
        <h3>Immerse Yourself in the Power of Books.</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={c} alt="Third slide" />

      <Carousel.Caption>
        <h3>Books Open Doors: Explore, Learn, Grow</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};
