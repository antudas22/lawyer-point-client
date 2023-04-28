import React from 'react';
import banner from '../../../assets/img-1.jpg'

const Banner = () => {
    return (
        <div className="hero bg-gray-200 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse gap-32">
    <img src={banner} className="max-w-xs rounded-lg shadow-2xl" alt='banner' />
    <div>
      <h1 className="text-5xl font-bold">Let's Discuss Your Problem</h1>
      <p className="py-6">The doctor sees all the weakness of mankind; the lawyer all the<br/> wickedness, the theologian all the stupidity.</p>
      <button className="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;