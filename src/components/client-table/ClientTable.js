import {Button, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import "./clientTable.css"
import { useEffect, useState } from 'react';
import { getAllClientAction } from '../../pages/signup-signin/userAction';
import { setModalShow } from '../../system/systemSlice';
import { CustomModal } from '../customModal/CustomModal';
import { EditUser } from '../editUser/EditUser';


export const ClientTable = ()=> {
const dispatch = useDispatch()
  const {client} = useSelector((state)=>state.user)
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() =>{
     dispatch(getAllClientAction())
  }, [dispatch])


  const handleOnEdit = (obj) =>{
    setSelectedUser(obj)
    dispatch(setModalShow(true))
  

  }
   
  return (
    <>
    <CustomModal heading="Edit User Details">
    <EditUser selectedUser={selectedUser} />
    </CustomModal>
    
    
   
    
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='text-start'>
        {client.map((item, i) =>(
          <tr key={item.id}>
          <td>{i + 1}</td>
          <td>
          {item.fName}
        </td>
          <td>{item.lName}</td>
          <td>{item.role}</td>
          <td>{item.email}</td>
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
