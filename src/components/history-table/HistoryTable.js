import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import "./historytable.css"
import { useEffect, useState } from 'react';
import { getBurrowBookAction, returnBookAction } from '../../pages/books/BookAction';
import { Button, Image } from 'react-bootstrap';
import ReviewForm from '../review/ReviewForm';
import { setModalShow } from '../../system/systemSlice';
import { CustomModal } from '../customModal/CustomModal';
import Rating from '../rating/Rating';


export const HistoryTable = ()=> {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const {burrowHistory} = useSelector(state => state.books)
  const [bookForReview, setBookForReview ]= useState({})
  

  useEffect (()=>{
    dispatch(getBurrowBookAction(user?.uid))

  }, [user?.uid, dispatch ])


  const handleOnReturn = ({id, bookId, userId}) =>{
if (window.confirm("Are you sure you want to return the book."))
    dispatch(returnBookAction({id, bookId, userId}))

  }

  const handleOnReview = item =>{
    setBookForReview(item)
    dispatch(setModalShow(true))
  }

  
   
  return (
    <>
    <CustomModal heading={"Give Review"}>
   <ReviewForm bookForReview  ={bookForReview}/>
   </CustomModal>
    
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Details</th>
          <th>Burrow Date</th>
          <th>Return Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='text-start'>
        {burrowHistory.map((item, i) =>(
          <tr key={item.id}>
          <td>{i + 1}</td>
          <td>
          <Image className='bookTableImg d-flex' src={item.url} rounded />          
        </td>
          <td>
            <p>{item.bookName}</p> 
            <p>{item.author + " - " + item.year }</p> 
          </td>
          <td>{new Date(item.burrowingAt).toDateString()}</td>
          <td>{new Date(item.returnAt).toDateString()}</td>
          <td>
          {item.hasReturned ? (
                  item.reviewId ? (
                    <>
                      <Rating rate={item.ratings} />
                      <br />
                      <Button variant="outline-danger">Delete review</Button>
                    </>
                  ) : (
                    <Button
                      variant="warning"
                      onClick={() => handleOnReview(item)}
                    >
                      Give Review
                    </Button>
                  )
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => handleOnReturn(item)}
                  >
                    Return Book
                  </Button>
                )}
          
            
          </td>
        </tr>
        ))}
        
       
      </tbody>
    </Table>
    </>
    
  );
}
