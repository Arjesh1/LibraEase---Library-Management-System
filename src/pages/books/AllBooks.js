import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { CustomInput } from '../../components/customInput/CustomInput';
import { CustomCard } from '../../components/customCard/CustomCard';
import { getAllBookAction } from './BookAction';

const AllBooks = () => {
    const dispatch = useDispatch();
    const { book  } = useSelector((state) => state.books);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        !display.length && dispatch(getAllBookAction());
        setDisplay(book);
      }, [dispatch, book]);

    const handleOnChange = (e) => {
        const { value } = e.target;
    
        const filteredItem = book.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        setDisplay(filteredItem);
      };



  return (
    <div>

        <MainLayout>
            
            <Container className="mt-4 mb-5">
        <Row>
          <Col>
            <h1>Search for books</h1>
            <div className="d-grid">
            
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

              {display.map((item) =>(
                <CustomCard className="mt-4" key={item.id} {...item}/>
              ))}
              
            </div>
          </Col>
        </Row>
      </Container>

            
        </MainLayout>
      
    </div>
  )
}

export default AllBooks
