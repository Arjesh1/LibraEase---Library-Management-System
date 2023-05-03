import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'

const Clients = () => {
  return (

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Clients</h3>

          <hr/>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Clients
