import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';
import useTitle from '../../hooks/useTitle';

const Appointment = () => {

    useTitle('Appointment')

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppointments 
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default Appointment;