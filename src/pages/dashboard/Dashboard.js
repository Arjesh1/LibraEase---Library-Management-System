import React, { useEffect } from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Container } from 'react-bootstrap'
import { getAllBookAction, getAllBurrowBookAction } from '../books/BookAction'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClientAction } from '../signup-signin/userAction'
import { ImBooks } from 'react-icons/im'
import { FaUser } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'






const Dashboard = () => {

  const dispatch = useDispatch()
  const { allBurrowRecord } = useSelector(state => state.books)
  const { client } = useSelector(state => state.user)
  const { book } = useSelector(state => state.books)

  useEffect (()=>{
    dispatch(getAllBurrowBookAction())
    dispatch(getAllClientAction())
    // dispatch(getAllBookAction())

  }, [dispatch])

  return (

  <PrivateRoute>
      <UserLayout>
        <Container className='mt-3'>

{/* top displays */}
          <div className='d-flex justify-content-around  '>

            <div className='  w-25 d-flex justify-content-around align-items-center shadow  mb-5 bg-body-tertiary rounded'>

              <div className='bg-danger p-2'>
                  <ImBooks className='fs-1 text-light rounded'/>

              </div>
              <div>
              <p className='text-center  mt-2  fs-5 '> Books
              <br/> 
              <span className='fw-bold fs-3'>{book.length}</span>
              </p>
             <p className='text-center   fs-3 fw-bold'> </p>
              </div>
             
              </div>

              <div className='  w-25 d-flex justify-content-around align-items-center shadow  mb-5 bg-body-tertiary rounded'>

              <div className='bg-info p-2'>
                  <FaUser className='fs-1 text-light rounded'/>

              </div>
              <div>
              <p className='text-center  mt-2  fs-5 '> User
              <br/> 
              <span className='fw-bold fs-3'>{client.length}</span>
              </p>
             <p className='text-center   fs-3 fw-bold'> </p>
              </div>
             
              </div>

              <div className='  w-25 d-flex justify-content-around align-items-center shadow  mb-5 bg-body-tertiary rounded'>

              <div className='bg-warning p-2'>
                  <GiRead className='fs-1 rounded text-light'/>

              </div>
              <div>
              <p className='text-center  mt-2  fs-5 '> Burrowed Books
              <br/> 
              <span className='fw-bold fs-3'>{allBurrowRecord.length}</span>
              </p>
             <p className='text-center   fs-3 fw-bold'> </p>
              </div>
             
              </div>
              
             
          </div>

          {/* charts */}

          {/* table */}

          {/* user client */}
          <div className='d-flex justify-content-between gap-4 '>
            <div className='w-50'> 
            <Table striped bordered hover >
            <thead>
              <tr>
                <th colSpan={5}  className='text-center bg-info text-light fs-4'>Users</th>
                </tr>
                </thead>  
      <thead>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>

      {client.map((item, index) => {
  if (index < 4) {
    return (
      <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
            {item.fName}
          </td>
            <td>{item.lName}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
          </tr>
    );
  }
  return null;
})}

      
      </tbody>

      <tbody>
        <tr>
          <td colSpan={5} className='text-end'>
            
            <Link to="/clients">
            <Button variant='dark' className='me-3'>More</Button>
            </Link>
            </td>
          
        </tr>
        
      </tbody>
    </Table>
            </div>

          {/* books table */}
            <div className='w-50'> 
            <Table striped bordered hover >
            <thead>
              <tr>
                <th colSpan={5}  className='text-center bg-warning text-light fs-4'>Books</th>
                </tr>
                </thead>  
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          
        </tr>
      </thead>
      <tbody>

      {book.map((item, index) => {
  if (index < 4) {
    return (
      <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
            {item.title.slice(0,20) + "...."}
          </td>
            <td>{item.name.slice(0,20) + "...."}</td>
            <td>{item.year}</td>
          
          </tr>
    );
  }
  return null;
})}

      
      </tbody>

      <tbody>
        <tr>
          <td colSpan={5} className='text-end '>
            
          <Link to="/books">
            <Button variant='dark' className='me-3'>More</Button>
            </Link>
            
            </td>
          
        </tr>
        
      </tbody>
    </Table>
            </div>


          </div>

        



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Dashboard
