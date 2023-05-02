import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
            <p className='text-center my-5 '>Available appointments on {format(selectedDate, 'PPPP')}</p>
        </div>
    );
};

export default AvailableAppointment;