import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Logo from '../components/logo/Logo';
import DashboardLogo from '../components/logo/DashboardLogo';
import { FaBoxOpen } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdAssignmentInd, MdDirectionsBike, MdEmergencyShare } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import useRole from '../hooks/useRole';
import { IoMdCheckmarkCircleOutline, IoMdHome } from 'react-icons/io';

const DashboadLayout = () => {
    const { role } = useRole();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="px-4">Zapper Dashboard</div>
                    </nav>
                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">
                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    {/* Home icon */}
                                    <DashboardLogo className="w-0.1 h-1"></DashboardLogo>


                                    <Link to='/'><span className="is-drawer-close:hidden">Homepage</span></Link>


                                </button>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-parcels" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="My Parcels"><FaBoxOpen /></NavLink>

                                <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard/my-parcels'> <FaBoxOpen />
                                    My Parcels</NavLink></span>
                            </li>


                            {/* rider only links */}
                            {
                                role === 'rider' && <>
                                    <li>
                                        <NavLink to="/dashboard/assigned-deliveries" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="Assigned Deliveries"><MdEmergencyShare /></NavLink>

                                        <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard/assigned-deliveries'> <MdEmergencyShare />
                                            Assigned Deliveries</NavLink></span>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/completed-deliveries" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="Completed Deliveries"><IoMdCheckmarkCircleOutline /></NavLink>

                                        <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard/completed-deliveries'> <MdEmergencyShare />
                                            Completed Deliveries</NavLink></span>
                                    </li>
                                </>
                            }

                            {/* Admin only links */}
                            {
                                role === "admin" && <>
                                    <li>
                                        <NavLink to="/dashboard" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="My Home"><IoMdHome /></NavLink>

                                        <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard'> <IoMdHome />
                                            My Home</NavLink></span>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/rider-applications" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="Approve Riders"><MdDirectionsBike /></NavLink>

                                        <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard/rider-applications'> <MdDirectionsBike />
                                            Approve Riders</NavLink></span>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/user-management" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="User Management"><FiUsers /></NavLink>

                                        <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard/user-management'> <FiUsers />
                                            User Management</NavLink></span>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/assign-rider" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="Assign Riders"><MdAssignmentInd /></NavLink>

                                        <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard/assign-rider'> <MdAssignmentInd />
                                            Assign Riders</NavLink></span>
                                    </li>
                                </>
                            }
                            <li>
                                <NavLink to="/dashboard/payment-history" className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:hidden" data-tip="Payment History"><FaHistory /></NavLink>

                                <span className="is-drawer-close:hidden"><NavLink className="flex gap-1 items-center" to='/dashboard/payment-history'> <FaHistory />
                                    Payment History</NavLink></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboadLayout;