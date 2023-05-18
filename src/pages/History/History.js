import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import { HistoryTable } from '../../components/history-table/HistoryTable'

const History = () => {
  return (

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3 className='text-center'>History</h3>

          <hr/>

          <HistoryTable/>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default History
