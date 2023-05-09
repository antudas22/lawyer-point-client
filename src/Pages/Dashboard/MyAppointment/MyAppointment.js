import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/reserves?email=${user?.email}`;

    const {data: reserves = [], isLoading} = useQuery({
        queryKey: ['reserves', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='p-2'>
            <h3 className='text-2xl text-center mb-4'>My Appointments</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Lawsuit</th>
        <th>Time</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>

        {
            reserves &&
            reserves.map((reserve, i) => <tr key={reserve._id} className="hover">
            <th>{i+1}</th>
            <td>{reserve.client}</td>
            <td>{reserve.lawsuit}</td>
            <td>{reserve.time}</td>
            <td>{reserve.appointmentDate}</td>
          </tr>)
        }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;