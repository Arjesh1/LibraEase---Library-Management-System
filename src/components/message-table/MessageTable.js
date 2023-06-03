import {Button, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import "./messageTable.css"
import { useEffect, useState } from 'react';
import {  getAllMessageAction } from '../../pages/signup-signin/userAction';
import { setModalShow } from '../../system/systemSlice';
import { CustomModal } from '../customModal/CustomModal';
import { EditUser } from '../editUser/EditUser';
import { Link } from 'react-router-dom';


export const MessageTable = ()=> {
const dispatch = useDispatch()
  const {messages} = useSelector((state)=>state.user)
  const [selectedMessage, setSelectedMessage] = useState({})

  useEffect(() =>{
     dispatch(getAllMessageAction())
  }, [dispatch])


  const handleOnEdit = (obj) =>{
    setSelectedMessage(obj)

  }


  
   
  return (
    <>
    
    
    
   
    
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='text-start'>
        {messages.map((item, i) =>(
          <tr key={item.id}>
          <td>{i + 1}</td>
          <td>
          {item.fName}
        </td>
          <td>{item.lName}</td>
          <td>{item.email}</td>
          <td>{item.address + " , " +  item.city + " , " + item.state + " , " + item.zip}</td>
          <td>{item.message}</td>
          <td>
            <a href={`mailto:${selectedMessage.email}`}>
          <Button variant='success' onClick={() => handleOnEdit(item)}>Reply</Button>
          </a>
            
          </td>
        </tr>
        ))}
        
       
      </tbody>
    </Table>
    </>
    
  );
}
