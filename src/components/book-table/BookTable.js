import {Button, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import "./booktable.css"
import { EditBook } from '../editBook/EditBook';
import { CustomModal } from '../customModal/CustomModal';
import { useEffect, useState } from 'react';
import { setModalShow } from '../../system/systemSlice';
import { getAllBookAction } from '../../pages/books/BookAction';

export const BookTable = ()=> {
const dispatch = useDispatch()
  const {book} = useSelector((state)=>state.books)
  const [selectedBook, setSelectedBook] = useState({})

  useEffect(() =>{
    !book.length && dispatch(getAllBookAction())
  }, [dispatch, book])


  const handleOnEdit = obj =>{
    setSelectedBook(obj)
    dispatch(setModalShow(true))

  }
   
  return (
    <>
    <CustomModal heading="Edit book">
    <EditBook/>
    </CustomModal>
   
    
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Title- Year</th>
          <th>Author</th>
          <th>Summary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='text-start'>
        {book.map((item) =>(
          <tr>
          <td>1</td>
          <td>
          <Image className='bookTableImg d-flex' src={item.url} rounded />
        </td>
          <td>{item.title + " - " + item.year}</td>
          <td>{item.name}</td>
          <td>{item.summary}</td>
          <td>
          <Button variant='warning' onClick={() => handleOnEdit(item)}>Edit</Button>
            
          </td>
        </tr>
        ))}
        
       
      </tbody>
    </Table>
    </>
    
  );
}
