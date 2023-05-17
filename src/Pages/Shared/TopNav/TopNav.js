import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";

const TopNav = () => {
    return (
        <div className='flex gap-2 lg:gap-5 justify-center md:justify-end lg:justify-end py-1 md:pr-4 lg:pr-8 bg-gray-300'>
            <div className='flex items-center gap-2'>
            <ImPhone/><p className='text-xs lg:text-sm'>+123 4567 83121</p>
            </div>
            <p>|</p>
            <div className='flex items-center gap-2'>
            <HiOutlineMail/><p className='text-xs lg:text-sm'>lawyerpoint@gmail.com</p>
            </div>
        </div>
    );
};

export default TopNav;