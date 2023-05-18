import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import "./historytable.css"
import { useEffect } from 'react';
import { getBurrowBookAction } from '../../pages/books/BookAction';
import { Button, Image } from 'react-bootstrap';


export const HistoryTable = ()=> {

  const {user} = useSelector(state => state.user)
  const {burrowHistory} = useSelector(state => state.books)
  const dispatch = useDispatch()

  useEffect (()=>{
    dispatch(getBurrowBookAction(user?.uid))

  }, [user?.uid, dispatch ])


  const handleOnReturn = () =>{

  }

  
   
  return (
    <>
    
   
    
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
          <Button variant='warning' onClick={() => handleOnReturn(item)}>Return</Button>
            
          </td>
        </tr>
        ))}
        
       
      </tbody>
    </Table>
    </>
    
  );
}
