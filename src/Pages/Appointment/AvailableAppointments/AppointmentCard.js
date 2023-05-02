import React from 'react';

const AppointmentCard = ({appointment}) => {
    const {name, image, time} = appointment;
    return (
        <div>
            <div className="card card-compact h-[430px] bg-base-100 shadow-xl">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div>
    <p className='mb-2'>{time.length > 0 ? time[0] : 'Please select another date.'}</p>
    <p>{time.length} {time.length < 2 ? 'space' : 'spaces'} available right now.</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentCard;