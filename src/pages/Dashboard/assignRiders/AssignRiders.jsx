import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import moment from 'moment/moment';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure();
    const[selectedParcel, setSelectedParcel] = useState(null);
    const riderModalRef = useRef();

    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending');
            return res.data;
        }
    })

    const openAssignRiderModal = (parcel)=>{
        setSelectedParcel(parcel);
        riderModalRef.current.showModal();
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
                                return (<tr>
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
                                    <td><button onClick={()=>openAssignRiderModal(parcel)} className='btn bg-primary text-secondary'>Assign Rider</button></td>
                                </tr>)
                            })}


                        </tbody>
                    </table>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-[#F8F8F8]">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
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