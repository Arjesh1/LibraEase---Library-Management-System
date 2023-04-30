import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    // const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  
  return user?.uid ?children :<Navigate to= "/signin" replace/>
}


