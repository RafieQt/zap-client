import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AdminDashboardHome = () => {
    const axiosSecure = useAxiosSecure();
    const {data: deliveryStats=[]} = useQuery({
        queryKey:['delivery-status-stats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/parcel/delivery-status/stats');
            return res.data
        }
    })

    return (
        <div className=' m-8'>
            <h2 className='text-secondary font-extrabold text-4xl pb-10'>Admin Dashboard</h2>
            <div className="stats stats-vertical lg:stats-horizontal gap-4 shadow-none">
                {
                    deliveryStats.map(delivery=>{
                        return(
                            <div key={delivery._id} className="stat bg-primary mr-4">
                    <div className="stat-title ">{delivery._id}</div>
                    <div className="stat-value text-secondary">{delivery.count}</div>
                    
                </div>
                        )
                    })
                }

                {/* <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div> */}
            </div>
        </div>
    );
};

export default AdminDashboardHome;