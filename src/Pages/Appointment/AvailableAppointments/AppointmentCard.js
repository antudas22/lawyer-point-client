import React from 'react';

const AppointmentCard = ({appointment, setLawsuit}) => {
    const {name, image, fee, times} = appointment;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure className='h-[200px]'><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div>
    <p className='mb-2'>{times.length > 0 ? times[0] : 'Please select another date.'}</p>
    <p>{times.length} {times.length < 2 ? 'space' : 'spaces'} available right now.</p>
    </div>
    <div className="card-actions justify-between items-center">
      <h4 className='text-lg text-info'>Consultancy Fee: ${fee}</h4>
      <label onClick={() => setLawsuit(appointment)} htmlFor="reserving-form" className="btn btn-primary text-white" disabled={times.length === 0}>Reserve Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentCard;