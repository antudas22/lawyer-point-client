import React from 'react';

const LawyersCard = ({lawyer}) => {
    const {image, name, email, phone, specialist, details} = lawyer;
    return (
            <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className='h-[200px]'><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Specialist In: {specialist}</p>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-link">View More</button>
          </div>
        </div>
      </div>
    );
};

export default LawyersCard;