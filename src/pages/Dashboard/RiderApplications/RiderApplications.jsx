import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaCheckSquare } from "react-icons/fa";
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";


const RiderApplications = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.riderMail };
        axiosSecure.patch(`riders/${rider._id}`, updateInfo).then(res => {
            if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Rider's status has been set to ${status}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    const handleApproval = (rider) => {
        updateRiderStatus(rider, "approved")

    }

    const handleDelete = (rider) => {
        updateRiderStatus(rider, "rejected")
    }
    return (
        <div>
            <div className='m-8'>
                <h2 className='text-secondary font-extrabold text-4xl pb-10'>Rider Applications: {riders.length}</h2>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Region</th>
                                    <th>status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {riders.map((rider, i) => {
                                    return (<tr>
                                        <th>{i + 1}</th>
                                        <td>{rider.riderName}</td>
                                        <td>{rider.riderMail}</td>
                                        <td>{rider.riderRegion}</td>
                                        <td>
                                            <p className={`${rider.status === "pending" ? 'text-red-500' : 'text-green-500'}`}>{rider.status}</p>
                                        </td>
                                        <td>
                                            <button onClick={() => handleApproval(rider)} className='btn p-2'><FaCheckSquare /></button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(rider)} className='btn p-2'><MdDelete /></button>
                                        </td>
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

export default RiderApplications;