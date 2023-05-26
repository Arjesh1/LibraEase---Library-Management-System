import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import { BurrowHistoryTable } from '../../components/burrowhistory-table copy/BurrowHistoryTable'


const BurrowHistory = () => {
  return (

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3 className='text-center'>Book Burrow History</h3>

          <hr/>

          <BurrowHistoryTable/>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default BurrowHistory
