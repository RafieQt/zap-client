import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: parcel, isLoading } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel/${parcelId}`);
            
            return res.data;
        }
    })

    if (isLoading) {
        return <div><span className="loading loading-dots loading-md"></span></div>
    }
    return (
        <div>
            <div>Pay for {parcel.parcelName}</div>
        </div>
    );
};

export default Payment;