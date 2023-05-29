import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ClientTable } from '../../components/client-table/ClientTable'
import { MessageTable } from '../../components/message-table/MessageTable'

const Messages = () => {

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
        <Container>
          <h3 className='text-center'>Messages</h3>

          <hr/>

          <MessageTable/>

          



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Messages
