import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [accepted, setAccepted] = useState(false);

    const handleToggle = () => {
        if(type === 'password'){
            setIcon(eye);
            setType('text');
        }
        else{
            setIcon(eyeOff);
            setType('password')
        }
    }

    const handleAccepted = e => {
        setAccepted(e.target.checked)
      }

      const handleRegister = data => {
        console.log(data)
      }

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-sm rounded-xl p-4 my-16 shadow-2xl'>
            <h2 className='text-4xl text-center mt-5 mb-10'>Register</h2>
        <form onSubmit={handleSubmit(handleRegister)} >

        <div className="form-control w-full max-w-sm">
        <input type="text" {...register("name",
        {required: true}
        )} placeholder="Full Name" className="input input-bordered w-full max-w-sm" />
        </div>

        <div className="form-control w-full max-w-sm">
        <input type="email" {...register("email",
        {required: "Email is required!"}
        )} placeholder="Email Address" className="input input-bordered w-full max-w-sm mt-2" />
        {errors.email && <p className='text-error text-end'>{errors.email?.message}</p>}
        </div>

        <div className="form-control w-full max-w-sm relative">
        <input type={type} {...register("password",{
            required: "Password is required!",
            minLength: {value: 8, message: 'Password must be at least 8 characters!'},
          pattern: {
          value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
          message: "Password must contain one uppercase, one lowercase character and also a number!",
        },
        }
        )} placeholder="Password" className="input input-bordered w-full max-w-sm mt-2" />
        <span onClick={handleToggle} className='absolute right-3 bottom-4 cursor-pointer'><Icon icon={icon} /></span>
        </div>
        {errors.password && <p className='text-error text-end'>{errors.password?.message}</p>}

        <div className="form-control my-4">
            <div className='flex justify-between'>
              <p>Accept <Link className='text-info underline' to='/termsandconditions'>Terms & Conditions.</Link></p>
              <input onClick={handleAccepted} type="checkbox" className="checkbox" />
            </div>
          </div>
        
      <input className='btn btn-primary text-white w-full mt-2' type="submit" value='Register' disabled={!accepted}/>
      <p className='text-center mt-4'>Already have an account? <Link to='/login' className='text-primary'>Login.</Link></p>
      <div className="divider">or</div>
        <div className='flex justify-around items-center w-full bg-white p-2 rounded-lg'>
            <p className='text-black'>Continue with</p>
        <ul className='flex gap-4'>
        <li><FaFacebook className='text-[#3b5998] text-3xl cur'/></li>
        <li><FaGoogle className='text-[#DB4437] text-3xl'/></li>
        <li><FaTwitter className='text-[#00acee] text-3xl'/></li>
      </ul>
        </div>
    </form>
        </div>
        </div>
    );
};

export default Register;