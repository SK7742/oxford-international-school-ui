import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        // If user is not logged in, redirect them to the login page
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
