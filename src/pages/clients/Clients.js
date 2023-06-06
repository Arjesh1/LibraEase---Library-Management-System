import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ClientTable } from '../../components/client-table/ClientTable'

const Clients = () => {

  const {user} = useSelector(state => state.user)


  if(user.role !== "admin"){
    return(
      <PrivateRoute>
      
        <Container >
          <h1 className='text-center'>Unauthorized Access</h1>


        </Container>

  </PrivateRoute>
    )


  }
  return (

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3 className='text-center'>Clients</h3>

          <hr/>

          <ClientTable/>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Clients
