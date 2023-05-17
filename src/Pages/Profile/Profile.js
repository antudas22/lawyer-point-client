import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='w-full'>
            <h2 className="text-3xl font-bold text-center my-10">My Profile</h2>
            <div className='flex justify-center'>
            <div className='w-96 shadow-2xl p-5 rounded-lg m-5'>
                <div className="avatar flex justify-center ">
                <div className="w-40 rounded-full">
                    <img src={user?.photoURL} alt='' />
                </div>
                </div>
                <p className='font-bold text-center mt-4'>Full Name: {user?.displayName}</p>
                <p className='font-bold text-center mt-2'>Email: {user?.email}</p>
            </div>
            </div>
        </div>
    );
};

export default Profile;