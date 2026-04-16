import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaCheckSquare } from "react-icons/fa";

const RiderApplications = () => {
    const axiosSecure = useAxiosSecure();
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const handleApproval = (id)=>{
        console.log(id);
    }
    return (
        <div>
            <div className='m-8'>
                <h2>Rider Applications: {riders.length}</h2>

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
                                {riders.map((rider, i)=>{
                                    return (<tr>
                                    <th>{i+1}</th>
                                    <td>{rider.riderName}</td>
                                    <td>{rider.riderMail}</td>
                                    <td>{rider.riderRegion}</td>
                                    <td>{rider.status}</td>
                                    <td><button onClick={()=>handleApproval(rider._id)} className='btn p-2'><FaCheckSquare /></button></td>
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