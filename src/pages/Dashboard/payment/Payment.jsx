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

    const handlePayment = async()=>{
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            sendeEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }

        const res = await axiosSecure.post('/checkout-session', paymentInfo)
        console.log(res.data);
        window.location.href = res.data.url;
    }

    if (isLoading) {
        return <div><span className="loading loading-dots loading-md"></span></div>
    }
    return (
        <div>
            <div>Pay ${parcel.cost} for {parcel.parcelName}</div>
            <button onClick={handlePayment} className='btn btn-primary text-secondary'>Pay</button>
        </div>
    );
};

export default Payment;