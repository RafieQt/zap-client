import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch, data: parcels = [] } = useQuery({
        queryKey: ['parcels', user.email, 'rider-assigned'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderMail=${user.email}&deliveryStatus=rider-assigned`);
            return res.data;
        }
    })

    

    const handleStatusUpdate = (parcel, status) => {
        const statusInfo = { 
            deliveryStatus: status,
            riderId: parcel.riderId
         };
        let message = `Parcel status has been update to ${status.split("-").join(" ")}`;
        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo).then(res => {
            if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: message,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
        )
    }

    return (
        <div className='m-8'>
            <h2>Pending parcels to be picked up:</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Pickup Location</th>
                            <th>Delivery Location</th>
                            <th>Actions</th>
                            <th>Update</th>
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
                                    {
                                        parcel.deliveryStatus === 'rider-assigned' ? <>
                                            <button onClick={() => handleStatusUpdate(parcel, "rider-arriving")} className='btn bg-primary text-secondary'>Accept</button>
                                            <button className='btn bg-red-300 text-secondary'>Reject</button>
                                        </> : <span className='text-secondary'>Accepted.</span>
                                    }
                                </td>
                                <td>
                                    

                                        <button onClick={() => handleStatusUpdate(parcel, "picked-up")} className='btn bg-primary text-secondary'>Picked Up!</button>
                                        <button onClick={() => handleStatusUpdate(parcel, "parcel-delivered")} className='btn bg-primary text-secondary ml-2'>Delivered!</button>
                                    
                                </td>
                            </tr>)
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignedDeliveries;