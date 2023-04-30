import React from "react";

const Services = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-14">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

        <div className="card bg-red-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Business</h2>
          </div>
        </div>
        <div className="card bg-blue-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Bankruptcy</h2>
          </div>
        </div>
        <div className="card bg-green-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Tax</h2>
          </div>
        </div>
        <div className="card bg-orange-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Defense</h2>
          </div>
        </div>
        <div className="card bg-emerald-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Constitutional</h2>
          </div>
        </div>
        <div className="card bg-yellow-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Family</h2>
          </div>
        </div>
        <div className="card bg-teal-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Labor</h2>
          </div>
        </div>
        <div className="card bg-cyan-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Estate Planning</h2>
          </div>
        </div>
        <div className="card bg-indigo-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Immigration</h2>
          </div>
        </div>
        <div className="card bg-fuchsia-100 duration-700 hover:bg-opacity-80 hover:scale-95">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Personal Injury</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
