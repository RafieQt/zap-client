import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import moment from 'moment/moment';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            
            return res.data;

        },
        enabled: !! user?.email
    })
    
    return (
        <div>
            <div className='w-322 min-h-176 ml-8 mr-13 mt-8 rounded-2xl bg-white p-8'>
                <h1 className='text-secondary font-extrabold text-5xl pb-10'>Payment History ({payments.length})</h1>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Parcel Info</th>
                                    <th>Recipient Info</th>
                                    <th>Tracking Number</th>
                                    <th>Payment Info</th>
                                    <th>Payment Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {payments.map((payment, index) => {
                                    return (<tr key={payment._id}>
                                        
                                        <th>{index + 1}</th>
                                        <td>{payment.parcelName}</td>
                                        <td>{payment.customerEmail}</td>
                                        <td>{payment.trackingId}</td>
                                        <td className='pl-9'>${payment.amount}</td>
                                        <td>{moment(payment.paidAt).format("YYYY-MM-DD HH:mm")}</td>
                                        <td><button>view</button></td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;