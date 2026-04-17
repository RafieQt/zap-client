import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure()
    const {data: parcels = []} = useQuery({
        queryKey: ['parcels', 'pending'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending');
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='text-secondary font-extrabold text-4xl pb-10'>assign riders: {parcels.length}</h2>
        </div>
    );
};

export default AssignRiders;