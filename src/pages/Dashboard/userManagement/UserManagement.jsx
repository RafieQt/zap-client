import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import moment from 'moment';
import { FaUserPlus, FaUserShield, FaUserSlash } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })

    const handleMakeUser = (user, role) => {
        const roleInfo = { role: role }
        axiosSecure.patch(`/users/${user._id}`, roleInfo).then(res => {
            if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.displayName} has been marked as ${role}!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    const handleMakeAdmin = (user)=>{
        handleMakeUser(user, "admin")
    }
    const handleRemoveAdmin = (user)=>{
        handleMakeUser(user, "user");
    }

    return (
        <div className='p-8'>
            <h2 className='text-secondary font-extrabold text-4xl pb-10'>Manage Users: {users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>role</th>
                                <th>Favorite Color</th>
                                <th>Admin Action</th>
                                <th>other Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => {
                                return (<tr>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photoURL}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.displayName}</div>
                                                <div className="text-sm opacity-50">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.role}

                                    </td>
                                    <td>{moment(user.createdAt).format("YYYY-MM-DD HH:mm")}</td>
                                    <th>
                                        {
                                            user.role === "admin" ? <button onClick={()=>handleRemoveAdmin(user)} className="btn bg-red-300"><FiShieldOff /></button> :
                                            <button onClick={()=>handleMakeAdmin(user)} className="btn bg-green-300"><FaUserShield /> </button>
                                        }

                                    </th>
                                    <th>
                                        <button className="btn"><FaUserSlash /></button>
                                        <button className="btn"><FaUserPlus /></button>
                                    </th>
                                </tr>)
                            })}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;