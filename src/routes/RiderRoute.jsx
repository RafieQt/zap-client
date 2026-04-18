import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/loading/Loading';

const RiderRoute = ({children}) => {
    const {user, loading} = useAuth();
    const {role, roleLoading} = useRole();
    if(!user || roleLoading || loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/signin"></Navigate>
    }
    if(role!=="rider"){
        return <Forbidden></Forbidden>
    }
    return children;
};

export default RiderRoute;