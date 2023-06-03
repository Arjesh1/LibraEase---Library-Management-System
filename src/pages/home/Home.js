import React, { useEffect, useState } from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import Carousel from 'react-bootstrap/Carousel';
import { HomeCarousel } from '../../components/carousel/HomeCarousel';
import { Col, Container, Row } from 'react-bootstrap';
import { CustomInput } from '../../components/customInput/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookAction } from '../books/BookAction';
import { CustomCard } from '../../components/customCard/CustomCard';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const { book,  } = useSelector((state) => state.books);

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
            <h1>Explore the library</h1>
            <div className=" mt-2">
          
              <CustomInput
                placeholder="Search book by title"
                className=" "
                onChange={handleOnChange}
              />
            </div>
            <hr />
            <div className=" d-flex justify-content-center flex-wrap gap-4">

            {!display.length && (
                <>
                <p  className='text-center'>No books found!</p>
                </>)}
            {display.map((item, index) => {
  if (index < 8) {
    return (
      <CustomCard className="mt-4" key={item.id} {...item} />
    );
  }
  return null;
})}

              
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-center mt-5'>

        <Link className='nav-link' to ="/allBooks ">

          <div className='border border-dark rounded-circle animate__animated animate__bounce'>
            <AiOutlineArrowDown className='more'/>
          </div>
          </Link>

        </div>
      </Container>
    </MainLayout>
  );
};

export default Home
