import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
 
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div className='relative'>
            <Navbar/>
            <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            <Outlet/>

            <div className='absolute top-3 right-16'>
                <label htmlFor="dashboard-drawer" className="btn btn-sm btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-200 text-base-content gap-1">
                
                <li className='bg-primary rounded-full text-white'><Link to='/dashboard'>My Appointments</Link></li>
                {
                    isAdmin && <>
                        <li className='bg-primary rounded-full text-white'><Link to='/dashboard/users'>All Users</Link></li>
                        <li className='bg-primary rounded-full text-white'><Link to='/dashboard/addlawyer'>Add A Lawyer</Link></li>
                    </>
                }
                </ul>
            
            </div>
            </div>
            
        </div>
    );
};  

export default DashboardLayout;