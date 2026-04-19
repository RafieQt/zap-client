import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    });

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName,
            trackingId: parcel.trackingId
        }
        const res = await axiosSecure.post('checkout-session', paymentInfo);
        window.location.assign(res.data.url);
    }

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel has been deleted.",
                                icon: "success"
                            })
                        }
                    });
            };
        });
    }
    return (
        <div className='p-8'>
            <h2 className='text-secondary font-extrabold text-4xl pb-10'>All my Parcels: {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Parcel Name</th>
                            
                            <th>Sender Name</th>
                            <th>Receiver Name</th>
                            <th>Parcel Cost</th>
                            <th>Payment</th>
                            <th>Delivery status</th>
                            <th>Tracking ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, i) => <tr key={parcel._id}>
                                <th>{i + 1}</th>
                                <td>{parcel.parcelName}</td>
                                
                                <td>{parcel.senderName}</td>
                                <td>{parcel.receiverName}</td>
                                <td>{parcel.cost}</td>
                                <td>{
                                    parcel.paymentStatus === "paid" ? <span>Paid</span> :
                                        <button onClick={() => handlePayment(parcel)} className='btn btn-primary btn-sm text-secondary'>Pay</button>

                                }</td>
                                <td><Link to={`/parcel-track/${parcel.trackingId}`}>{parcel.trackingId}</Link></td>
                                <td>{parcel.trackingId}</td>
                                <td>
                                    <button className="btn btn-square hover:bg-primary mr-2">
                                        <MdEditSquare />
                                    </button>
                                    <button onClick={() => handleDelete(parcel._id)} className="btn btn-circle hover:bg-primary">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                <Link to='/sendParcel'><div className='w-full flex justify-center py-2'><button className='btn btn-primary text-secondary mt-4'>Send Parcel</button></div></Link>
            </div>
        </div>
    );
};

export default MyParcels;