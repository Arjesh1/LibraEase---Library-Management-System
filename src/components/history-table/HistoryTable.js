import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import "./historytable.css"
import { useEffect, useState } from 'react';
import { deleteReviewAction, getBurrowBookAction, returnBookAction } from '../../pages/books/BookAction';
import { Button, Card, Image } from 'react-bootstrap';
import ReviewForm from '../review/ReviewForm';
import { setModalShow } from '../../system/systemSlice';
import { CustomModal } from '../customModal/CustomModal';
import Rating from '../rating/Rating';



export const HistoryTable = ()=> {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const {burrowHistory} = useSelector(state => state.books)
  const [bookForReview, setBookForReview ]= useState({})
  const [selectedBookReview, setSelectedBookReview ]= useState({})
  



  useEffect (()=>{
    dispatch(getBurrowBookAction(user?.uid))

  }, [user?.uid, dispatch ])


  const handleOnReturn = ({id, bookId, userId}) =>{
if (window.confirm("Are you sure you want to return the book."))
    dispatch(returnBookAction({id, bookId, userId}))

  }

  const handleOnReview = (item )=>{
    setBookForReview(item)
    dispatch(setModalShow(true))

    
  }

  const handleOnEditReview = item =>{
    setSelectedBookReview(item)
    dispatch(setModalShow(true))
  }

  
  const handleOnDelete = (obj) =>{
    const {reviewId, id, userId, ...rest} = obj
    if (window.confirm ("Are you sure you want to delete this review? ")) {
      dispatch(deleteReviewAction({reviewId, id, userId}))
      }
  }

  
   
  return (
    <>
    { !burrowHistory.reviewId ? (
      <>
      <CustomModal 
      heading={"Give Review"}>
   <ReviewForm bookForReview  ={bookForReview}/>
   </CustomModal>
      </>

    ):(
      <>
   <CustomModal heading={"Edit Review"}>
   <ReviewForm selectedBookReview  ={selectedBookReview}/>
   </CustomModal>
      </>

    )}

    
      <div className='history_card'>
      <div className=" d-flex justify-content-center flex-wrap gap-5 mb-5">
               
      {burrowHistory.map((item) =>(
        <Card className="mt-5" style={{ width: "18rem", height:"46rem" }}>
        <Card.Img className="cardImg" variant="top" src={item.url} />
        <Card.Body>
          <Card.Title className="fw-bold title">{item.bookName}</Card.Title>
          <Card.Text>
            <h5 className="author"> 
              {item.author} - {item.year}
            </h5>

            <div className="d-flex justify-content-around gap-5 mt-3">

              <div>
                <p className='fw-bold text-center'>Burrow date</p>
                <p className='text-center'>{new Date(item.burrowingAt).toDateString()}</p>

              
              </div>

              <div>
                <p className='fw-bold text-center'>Return date</p>
                <p className='text-center'>{new Date(item.returnAt).toDateString()}</p>

              
              </div>

            </div>

          </Card.Text>
          <div className="card-rating d-flex justify-content-center gap-1">
            
          {item.hasReturned ? (
            item.reviewId ? (
              <>
              <Button className='mb-2' variant='body' onClick={() => handleOnEditReview(item)}>
              <Rating rate={item.ratings} />
              </Button>
                
                <br />
                <Button variant="outline-danger" onClick={() => handleOnDelete(item)}>Delete review</Button>
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
         

        
          </div>
          
        </Card.Body>
      </Card>

        

        
      ))}

      
      
    </div>
    </div>
    
    

      <div className='history_table'>
      <Table striped bordered hover className='mb-5 pb-5'>
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
              <Button className='mb-2' variant='body' onClick={() => handleOnEditReview(item)}>
              <Rating rate={item.ratings} />
              </Button>
                
                <br />
                <Button variant="outline-danger" onClick={() => handleOnDelete(item)}>Delete review</Button>
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
</div>

    


  
    
    
    </>
    
  );
}
