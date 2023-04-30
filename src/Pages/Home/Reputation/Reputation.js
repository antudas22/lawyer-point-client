import React, { useState } from 'react';
import { HiOutlineTrophy, HiOutlineUserCircle, HiOutlineStar } from "react-icons/hi2";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Reputation = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)}>
        <div className="flex justify-around mx-20 mt-28 h-52 bg-green-200 rounded-3xl">
        <div className='flex gap-5 items-center'>
                <HiOutlineTrophy className='text-8xl text-yellow-400'/>
                <div className=''>
                    <p className='text-lg'>Won Cases</p>
                    {
                        counterOn &&
                        <h2 className='text-4xl font-bold'><CountUp start={0} end={965} duration={5} delay={0} />+</h2>
                    }
                </div>
                
        </div>
        <div className='flex gap-5 items-center'>
                <HiOutlineUserCircle className='text-8xl text-yellow-400'/>
                <div className=''>
                    <p className='text-lg'>Clients</p>
                    {
                        counterOn &&
                        <h2 className='text-4xl font-bold'><CountUp start={0} end={855} duration={5} delay={0} />+</h2>
                    }
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <HiOutlineStar className='text-8xl text-yellow-400'/>
                <div className=''>
                    <p className='text-lg'>Reviews</p>
                    {
                        counterOn &&
                        <h2 className='text-4xl font-bold'><CountUp start={0} end={652} duration={5} delay={0} />+</h2>
                    }
                </div>
            </div>
        </div>
      </ScrollTrigger>
    );
};

export default Reputation;