import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Container } from 'react-bootstrap'
import ProfileForm from '../../components/profile-form/ProfileForm'


const Profile = () => {
  return (

  <PrivateRoute>
      <UserLayout>
        <Container>
          <h3 className='text-center'>Profile</h3>

          <hr/>

          <ProfileForm/>



        </Container>
      </UserLayout>

  </PrivateRoute>
  )
}

export default Profile
