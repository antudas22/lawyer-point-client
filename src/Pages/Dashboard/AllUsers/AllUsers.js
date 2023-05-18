import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {


    const {data: users = [], refetch, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://lawyer-point-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading/>;
    }

    const handleMakeAdmin = user => {
      const alert = window.confirm('Are you sure you want to change this user role.')
      if(alert){
        fetch(`https://lawyer-point-server.vercel.app/users/admin/${user._id}`, {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
          refetch();
        }
      })
      }
      
    }

    const handleMakeUser = user => {
      const alert = window.confirm('Are you sure you want to change this user role.')
      if(alert){
      fetch(`https://lawyer-point-server.vercel.app/users/user/${user._id}`, {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
          refetch();
        }
      })
    }
  }

    return (
        <div className='p-2'>
            <h3 className='text-2xl text-center mb-4'>All Users</h3>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Make Admin</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>

                    {
                        users?.map((user, i) => <tr key={user._id} className="hover">
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user)} className='btn btn-info btn-sm text-white'>Make</button>}</td>
                        <td>{ user?.role !== 'user' && <button onClick={() => handleMakeUser(user)} className='btn bg-red-500 btn-sm text-white border-none'>Delete</button>}</td>
                      </tr>)
                    }

                </tbody>
              </table>
            </div>
        </div>
    );
};

export default AllUsers;