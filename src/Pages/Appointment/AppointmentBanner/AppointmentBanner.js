import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


    return (
        <div>
            <div className="hero py-10 bg-gray-200">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <DayPicker
        mode='single'
        selected={selectedDate}
        onSelect={setSelectedDate}

        className='shadow-2xl p-5 rounded-lg'

    />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">Pick a date</h1>
      <p className="py-6">For Discussion please pick a date and book an appointment to hire a professional lawyer.</p>
    </div>
  </div>
</div>
        
        </div>
    );
};

export default AppointmentBanner;