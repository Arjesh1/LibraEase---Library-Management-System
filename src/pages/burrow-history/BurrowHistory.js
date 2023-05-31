import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import { BurrowHistoryTable } from '../../components/burrowhistory-table/BurrowHistoryTable'
// import { BurrowHistoryTable } from '../../components/burrow-history/BurrowHistory'


const BurrowHistory = () => {
  return (

  <PrivateRoute>
      <UserLayout>
        <Container className='pb-5' >
          <h3 className='text-center'>Book Burrow History</h3>

          <hr/>

          <BurrowHistoryTable className='mb-5'/>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default BurrowHistory
