import React, { useEffect } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Rating from '../../components/rating/Rating'
import Review from '../../components/review/Review'
import { createNewBurrowAction } from './BookAction'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'



const BookLanding = () => {
    const dispatch = useDispatch()
    const {bookId} = useParams()
    const navigate = useNavigate()
    const { book } = useSelector((state)=> state.books)
    const { user } = useSelector((state)=> state.user)

    useEffect(() =>{
        if (!book.length) {
            navigate("/")
        }
    })

    const selectedBook = book.find(item => item.id === bookId)
    const { id, title, url, name, year, summary, isAvailable, availableFrom} = selectedBook
    const date = new Date(availableFrom * 1000);
    const dateFrom = date.toUTCString()
    
    

    const handleOnBurrow =() =>{

        const {uid, fName} = user
        if(user.uid){
            //create burrrowhistory table and add following obj
            const defaultBurrowDay= 14
            const obj = {
                url: url,
                bookId: id,
                bookName: title,
                author: name,
                year:year,
                userName: fName,
                userId: uid,
                burrowingAt: Date.now(),
                returnAt: Date.now() + ( defaultBurrowDay *24*60*60*1000) ,
                hasReturned: false 

                

            }
            dispatch(createNewBurrowAction(obj))
            return;
       
       
        }
    }
    
  return (
   <MainLayout>
    <Container className='mt-5'>
    <Link to ="/">
            <Button variant='secondary'> <BsFillArrowLeftCircleFill/>  Back</Button>

          </Link>
        <Row className='mt-5'>
    <Col sm={5}>
    <Image className='bookLandingImg d-flex' width={"100%"} height={"700vh"} src={url} rounded />
    
    </Col>

    <Col sm={7}>
    <h3>{title + " - " + year} </h3>
    <h5>{name}</h5>
    <br/>
    <Rating rate= {5} />
    {!user.uid ? (
        <Button  className='mt-3 mb-2' disabled={true} >Login to Burrow</Button>

    ):(
        isAvailable ?
         <Button onClick={handleOnBurrow} className='mt-3 mb-2'>Burrow Now</Button> :
         <Button  className='mt-3 mb-2' disabled={true} >Available From: {new Date(availableFrom).toDateString()} </Button>


    ) 
    }
    

    <br/>
    
    <h5>Summary:</h5>
    <p>{summary}</p>
    
    
    </Col>
        </Row>

        <Row className='mt-5'>
            <Col>

            <h4>Reviews</h4>
            <div className='review-List'>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
            </Col>
        </Row>
    </Container>
   </MainLayout>
  )
}

export default BookLanding
