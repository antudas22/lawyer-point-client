import React from 'react';
import banner from '../../../assets/img-1.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-gray-200 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-32 my-5">
    <img src={banner} className="max-w-xs rounded-lg shadow-2xl" alt='banner' />
    <div className='text-center lg:text-start'>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Let's Discuss Your Problem</h1>
      <p className="py-3 lg:py-6">The doctor sees all the weakness of mankind; the lawyer all the<br/> wickedness, the theologian all the stupidity.</p>
      <Link to='/appointment' className="btn btn-primary text-white">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;