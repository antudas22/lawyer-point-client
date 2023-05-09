import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentCard from './AppointmentCard';
import ReservingForm from '../ReservingForm/ReservingForm';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    
    const [lawsuit, setLawsuit] = useState(null);

    const date = format(selectedDate, 'PPPP');

    const {data:availableAppointments = [], refetch, isLoading} = useQuery({
        queryKey: ['availableAppointments', date],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/availableAppointments?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading/>
    }
    
    return (
        <div>
            <p className='text-center my-10'>Available appointments on {date}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                availableAppointments.map(appointment => <AppointmentCard
                    key={appointment._id}
                    appointment={appointment}
                    setLawsuit={setLawsuit}
                /> )
            }
            </div>
            {
                lawsuit &&
                <ReservingForm
                lawsuit={lawsuit}
                setLawsuit={setLawsuit}
                selectedDate={selectedDate}
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointments;