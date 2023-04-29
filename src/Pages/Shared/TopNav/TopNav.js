import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";

const TopNav = () => {
    return (
        <div className='flex gap-5 justify-end py-1 pr-8 bg-gray-300'>
            <div className='flex items-center gap-2'>
            <ImPhone/><p>+123 4567 83121</p>
            </div>
            <p>|</p>
            <div className='flex items-center gap-2'>
            <HiOutlineMail/><p>lawyerpoint@gmail.com</p>
            </div>
        </div>
    );
};

export default TopNav;