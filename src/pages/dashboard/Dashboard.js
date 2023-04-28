import React from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'

const Dashboard = () => {
  return (

  <PrivateRoute>
      <p>dashboard</p>

  </PrivateRoute>
  )
}

export default Dashboard
