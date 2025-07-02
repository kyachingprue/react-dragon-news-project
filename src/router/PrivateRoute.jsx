import React, { useContext } from 'react';
import AuthContext from '../Provider/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner justify-center items-center text-center mx-auto my-20 loading-xl"></span>
  }

  if (users) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>
};

export default PrivateRoute;