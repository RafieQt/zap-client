import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: parcels = [] } = useQuery({
        queryKey: ['parcels', user.email, 'rider-assigned'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderMail=${user.email}&deliveryStatus=parcel-delivered`);
            return res.data;
        }
    })

    const calculate = (parcel)=>{
        if(parcel.senderDistrict === parcel.receiverDistrict){
            return parcel.cost*0.8;
        }else{
            return parcel.cost*0.6;
        }
    }
    return (
        <div className='m-8'>
            <h2 className='text-secondary font-extrabold text-4xl pb-10'>Completed Deliveries: {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Pickup Location</th>
                            <th>Delivery Location</th>
                            <th>Cost</th>
                            <th>Payout</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => {
                            return (<tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>
                                    {parcel.parcelName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{parcel.parcelName}</span>
                                </td>
                                <td>
                                    {parcel.pickupLocation}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{parcel.receiverDistrict}, {parcel.receiverRegion}</span>
                                </td>
                                <td>
                                    {parcel.deliveryLocation}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{parcel.senderDistrict}, {parcel.senderRegion}</span>
                                </td>
                                <td>
                                    ${parcel.cost}
                                </td>
                                <td>
                                    ${parseInt(calculate(parcel))}
                                </td>
                                <td>
                                    <button className='btn bg-primary text-secondary'>Cashout</button>
                                </td>
                            </tr>)
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedDeliveries;