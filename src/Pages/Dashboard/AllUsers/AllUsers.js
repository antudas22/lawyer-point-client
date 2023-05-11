import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../Shared/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllUsers = () => {

  const {logOut} = useContext(AuthContext);

    const {data: users = [], refetch, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading/>;
    }

    const handleMakeAdmin = id => {
      fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
        if(res.status === 401 || res.status === 403){
          return logOut();
        }
        res.json()
      })
      .then(data => {
        if(data.modifiedCount > 0){
          alert('Are you sure you want to make this user admin')
          refetch();
        }
      })
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
                        <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-info btn-sm text-white'>Make</button>}</td>
                        <td><button className='btn bg-red-500 btn-sm text-white border-none'>Delete</button></td>
                      </tr>)
                    }

                </tbody>
              </table>
            </div>
        </div>
    );
};

export default AllUsers;