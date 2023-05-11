import React, { useEffect, useState } from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import Carousel from 'react-bootstrap/Carousel';
import { HomeCarousel } from '../../components/carousel/HomeCarousel';
import { Col, Container, Row } from 'react-bootstrap';
import { CustomInput } from '../../components/customInput/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookAction } from '../books/BookAction';
import { CustomCard } from '../../components/customCard/CustomCard';

const Home = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const { book } = useSelector((state) => state.books);

  useEffect(() => {
    !display.length && dispatch(getAllBookAction());
    setDisplay(book);
  }, [dispatch, book]);

  // on handle change get typed value

  const handleOnChange = (e) => {
    const { value } = e.target;

    const filteredItem = book.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(filteredItem);
  };
  // use filter to filter book based on the typed value overide display state
  //use display statet to loop throught

  return (
    <MainLayout>
      <HomeCarousel />
      <Container className="mt-4 mb-5">
        <Row>
          <Col>
            <h1>Exlopre the library</h1>
            <div className="d-flex justify-content-between mt-5">
              <div> {display.length} Books found!</div>
              <CustomInput
                placeholder="Search book by title"
                className=" "
                onChange={handleOnChange}
              />
            </div>
            <hr />
            <div className=" d-flex justify-content-between flex-wrap gap-2">
              {display.map((item) =>(
                <CustomCard className="mt-4" key={item.id} {...item}/>
              ))}
              
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home
