import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BookTable } from '../../components/book-table/BookTable'
import { useSelector } from 'react-redux'

const Books = () => {

  const {user} = useSelector(state => state.user)
  if(user.role != "admin"){
    return(
      <PrivateRoute>
      <UserLayout>
        <Container >
          <h1 className='text-center'>Unauthorized Access</h1>



        </Container>
      </UserLayout>

  </PrivateRoute>
    )


  }
  return (

  <PrivateRoute>
      <UserLayout>
        <Container className='pb-5' >
          <h3 className='text-center'>Books</h3>

          <hr/>

          <div className='text-end'>
            <Link to="/new-book">
              <Button variant='primary'>Add New Book</Button>
            </Link>
            <div className='mt-3'>
            <BookTable/>
            </div>
            
          </div>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Books

