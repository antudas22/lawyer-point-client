import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';

const AvailableAppointments = ({selectedDate}) => {
    
    const [availableAppointments, setAvailableAppointments] = useState([]);

    useEffect( () => {
        fetch('availableAppointments.json')
        .then(res => res.json())
        .then(data => setAvailableAppointments(data) )
    }, [])
    
    return (
        <div>
            <p className='text-center my-10'>Available appointments on {format(selectedDate, 'PPPP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                availableAppointments.map(appointment => <AppointmentCard
                    key={appointment._id}
                    appointment={appointment}
                /> )
            }
            </div>
        </div>
    );
};

export default AvailableAppointments;