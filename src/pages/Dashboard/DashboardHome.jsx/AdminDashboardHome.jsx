import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const AdminDashboardHome = () => {
    const axiosSecure = useAxiosSecure();
    const { data: deliveryStats = [] } = useQuery({
        queryKey: ['delivery-status-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcel/delivery-status/stats');
            return res.data
        }
    })

    const pieChartData = (data) => {
        return data.map(d => { return { name: d.status, value: d.count } })
    }
    const STATUS_COLORS = {
        pending: '#facc15',   // yellow
        'parcel-delivered': '#22c55e', // green
        'rider-assigned': '#ef4444', // red
    };

    return (
        <div className=' m-8'>
            <h2 className='text-secondary font-extrabold text-4xl pb-10'>Admin Dashboard</h2>
            <div className="stats stats-vertical lg:stats-horizontal gap-4 shadow-none">
                {
                    deliveryStats.map(delivery => {
                        return (
                            <div key={delivery._id} className="stat bg-primary mr-4">
                                <div className="stat-title ">{delivery._id}</div>
                                <div className="stat-value text-secondary">{delivery.count}</div>

                            </div>
                        )
                    })
                }
            </div>
            <div>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={pieChartData(deliveryStats)}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            dataKey="value"
                        >
                            {
                                pieChartData(deliveryStats).map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={STATUS_COLORS[entry.name] || '#8884d8'}
                                    />
                                ))
                            }
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminDashboardHome;