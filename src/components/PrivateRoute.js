// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);
  
  return (
    <Route 
      {...rest} 
      element={user ? element : <Navigate to="/" />} 
    />
  );
};

export default PrivateRoute;
