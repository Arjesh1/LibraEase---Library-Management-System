import {Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import "./booktable.css"

export const BookTable = ()=> {

  const {book} = useSelector((state)=>state.books)
   
  return (
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Title- Year</th>
          <th>Author</th>
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
          <td>@mdo</td>
        </tr>
        ))}
        
       
      </tbody>
    </Table>
  );
}
