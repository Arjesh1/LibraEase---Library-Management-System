import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'

const Dashboard = () => {
  return (

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3 className='text-center'>Dashboard</h3>

          <hr/>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Dashboard
