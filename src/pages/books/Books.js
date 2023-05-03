import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BookTable } from '../../components/book-table/BookTable'

const Books = () => {
  return (

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Books</h3>

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

