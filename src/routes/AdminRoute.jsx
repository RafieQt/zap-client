import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/loading/Loading';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router';
import Forbidden from '../components/forbidden/Forbidden';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const {role, roleLoading} = useRole();
    if(loading || roleLoading){
        <Loading></Loading>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/signin"></Navigate>
    }
    if(role!=="admin"){
        return <Forbidden></Forbidden>
    }
    return children;
};

export default AdminRoute;