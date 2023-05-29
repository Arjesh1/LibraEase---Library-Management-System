import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import "./burrowhistorytable.css"
import { useEffect, useState } from 'react';
import { getAllBurrowBookAction, getBurrowBookAction, returnBookAction } from '../../pages/books/BookAction';
import { Button, Image } from 'react-bootstrap';
import ReviewForm from '../review/ReviewForm';
import { setModalShow } from '../../system/systemSlice';
import { CustomModal } from '../customModal/CustomModal';
import Rating from '../rating/Rating';


export const BurrowHistoryTable = ()=> {
  const dispatch = useDispatch()
  const {allBurrowRecord} = useSelector(state => state.books)
  const [bookForReview, setBookForReview ]= useState({})
  

  useEffect (()=>{
    dispatch(getAllBurrowBookAction())

  }, [dispatch])


  const handleOnEdit = item =>{
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
          <th>User</th>
          <th>Burrow Date</th>
          <th>Return Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='text-start'>
        {allBurrowRecord.map((item, i) =>(
          <tr key={item.id}>
          <td>{i + 1}</td>
          <td>
          <Image className='bookTableImg d-flex' src={item.url} rounded />          
        </td>
          <td>
            <p>{item.bookName}</p> 
            <p>{item.author + " - " + item.year }</p> 
          </td>
          <td>{item.userName}</td>
          <td>{new Date(item.burrowingAt).toDateString()}</td>
          <td>{new Date(item.returnAt).toDateString()}</td>
          
          <td>
          <Button
                      variant="warning"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
        
          </td>
        </tr>
        ))}
        
       
      </tbody>
    </Table>
    </>
    
  );
}
