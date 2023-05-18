import React, { useContext} from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useTitle from '../../hooks/useTitle';

const ForgetPassForm = () => {
    useTitle('Forget Password')
    const {forgetPassword} =useContext(AuthContext);
    const {register, handleSubmit} = useForm();

    const handleForgetPass = data => {
        forgetPassword(data.email)
      .then(() => {
        toast.success('Please check your email to get forget password link',{duration: 10000,})
      })
      .catch(error => console.error(error))
    }
    return (
        <div className='p-5'>
            <div className='w-full mx-auto max-w-sm rounded-xl p-4 my-5 md:my-10 lg:my-16 shadow-2xl'>
            <h2 className='text-4xl text-center mt-5 mb-10'>Forget Password</h2>
            <form onSubmit={handleSubmit(handleForgetPass)}>
            <div className="form-control w-full max-w-sm">
        <input type="email" {...register("email",
        {required: "Email is required!"}
        )} placeholder="Enter Email Address" className="input input-bordered w-full max-w-sm mt-2" />
        </div>
            <input className='btn btn-primary text-white w-full mt-4' type="submit" value='Submit'/>
            </form>
            </div>
        </div>
    );
};

export default ForgetPassForm;