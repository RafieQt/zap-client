import React from 'react';
import AdminDashboardHome from '../DashboardHome.jsx/AdminDashboardHome';
import useRole from '../../../hooks/useRole';

const DashboardHome = () => {
    const {role} = useRole();

    if(role==='admin'){
        return <AdminDashboardHome></AdminDashboardHome>
    }else{
        return(
            <div>Home Dashboard</div>
        )
    }
};

export default DashboardHome;