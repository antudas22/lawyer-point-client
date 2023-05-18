import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LawyersCard from "./LawyersCard";

const Lawyers = () => {

  const [lawyers, setLawyers] = useState();

  useEffect( () => {
    fetch('https://lawyer-point-server.vercel.app/ourLawyers')
  .then(res => res.json())
  .then(data => setLawyers(data))
  }, [])


  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-center my-10 lg:my-14">Meet Our Lawyers</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-5'>
      {
        lawyers?.map(lawyer => <LawyersCard
          key={lawyer._id}
          lawyer={lawyer}
        />)
      }
      </div>
      
      <div className="flex justify-center mt-10 lg:mt-14">
        <Link to='/alllawyers' className="btn btn-primary text-white">View All Lawyers</Link>
      </div>

    </div>
  );
};

export default Lawyers;
