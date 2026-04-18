import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import moment from 'moment/moment';
import Swal from 'sweetalert2';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedParcel, setSelectedParcel] = useState(null);
    const riderModalRef = useRef();

    const { data: parcels = [], refetch: parcelRefetch } = useQuery({
        queryKey: ['parcels', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending');
            return res.data;
        }
    })

    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectedParcel?.senderDistrict, 'Available'],
        enabled: !!selectedParcel?.senderDistrict,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?status=approved&district=${selectedParcel.senderDistrict}&workStatus=Available`);
            return res.data;
        }
    })

    const openAssignRiderModal = (parcel) => {
        setSelectedParcel(parcel);
        riderModalRef.current.showModal();
    }

    const handleAssignRider = (rider) => {
        const riderAssignInfo = {
            riderId: rider._id,
            riderEmail: rider.riderMail,
            riderName: rider.riderName,
            parcelId: selectedParcel._id
        }
        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo).then(res => {
            if (res.data.modifiedCount) {
                parcelRefetch();
                riderModalRef.current.close();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Rider has been assigned!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div className='m-8'>
            <h2 className='text-secondary font-extrabold text-4xl pb-10'>Assign Riders: {parcels.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Pickup Location</th>
                                <th>Delivery Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parcels.map((parcel, index) => {
                                return (<tr key={parcel._id}>
                                    <th>{index + 1}</th>
                                    <td>{parcel.senderEmail}</td>
                                    <td>{parcel.cost}</td>
                                    <td>
                                        {parcel.pickupLocation} ({moment(parcel.createdAt).format("YYYY-MM-DD HH:mm")})
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{parcel.receiverDistrict}, {parcel.receiverRegion}</span>
                                    </td>
                                    <td>
                                        {parcel.deliveryLocation}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{parcel.senderDistrict}, {parcel.senderRegion}</span>
                                    </td>
                                    <td><button onClick={() => openAssignRiderModal(parcel)} className='btn bg-primary text-secondary'>Find Riders</button></td>
                                </tr>)
                            })}


                        </tbody>
                    </table>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-[#F8F8F8]">
                        <h3 className="font-bold text-lg">Riders: {riders.length}</h3>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Contacts</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riders.map((rider, index) => {
                                        return (<tr key={rider._id}>
                                            <th>{index + 1}</th>
                                            <td>{rider.riderName}</td>
                                            <td>
                                                {rider.riderMail}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Phone: {rider.riderPhone}</span>
                                            </td>
                                            <td><button onClick={() => handleAssignRider(rider)} className='btn bg-primary text-secondary'>Assign</button></td>
                                        </tr>)
                                    })}


                                </tbody>
                            </table>
                        </div>
                        <div className="modal-action ">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AssignRiders;