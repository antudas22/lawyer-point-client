import React, { useEffect, useState } from "react";
import LawyersCard from "../Home/Lawyers/LawyersCard";

const AllLawyers = () => {

  const [lawyers, setLawyers] = useState();

  useEffect( () => {
    fetch('http://localhost:5000/allLawyers')
  .then(res => res.json())
  .then(data => setLawyers(data))
  }, [])


  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-center my-14">All Lawyers</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
      {
        lawyers?.map(lawyer => <LawyersCard
            key={lawyer._id}
            lawyer={lawyer}
          />)
      }
      </div>

    </div>
  );
};

export default AllLawyers;
