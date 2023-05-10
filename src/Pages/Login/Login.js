import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Icon from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";

const Login = () => {

    const {loginUser, providerLogin} = useContext(AuthContext);

    const {register, formState: {errors}, handleSubmit} = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookLogin = () => {
        providerLogin(facebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => setLoginError(error.message))
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            saveUser(user.displayName, user.email)
            
        })
        .catch(error => setLoginError(error.message))
    }

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoginUserEmail(data.email)
        })
      }

    const handleLogin = data => {
        setLoginError('');
        loginUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email);
        })
        .catch(error => {
            console.error(error)
            setLoginError(error.message)
        })
    }

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

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

  return (
    <div className='flex justify-center'>
            <div className='w-full max-w-sm rounded-xl p-4 my-16 shadow-2xl'>
            <h2 className='text-4xl text-center mt-5 mb-10'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} >
        <div className="form-control w-full max-w-sm">
        <input type="email" {...register("email",
        {required: "Email is required!"}
        )} placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
        {errors.email && <p className='text-error text-end'>{errors.email?.message}</p>}
        </div>

        <div className="form-control w-full max-w-sm relative">
        <input type={type} {...register("password",{
            required: "Password is required!",
            minLength: {value: 8, message: 'Password must be at least 8 characters!'},
        }
        )} placeholder="Password" className="input input-bordered w-full max-w-sm mt-2" />
        <span onClick={handleToggle} className='absolute right-3 bottom-4 cursor-pointer'><Icon icon={icon} /></span>
        </div>
        {errors.password && <p className='text-error text-end'>{errors.password?.message}</p>}
        <div>
            {
                loginError && <p className='text-error'>{loginError}</p>
            }
        </div>

        <p className='my-3 '>Forget Password?</p>
      <input className='btn btn-success text-white w-full mt-2' type="submit" value='Login' />
      <p className='text-center mt-4'>New to Lawyer Point? <Link to='/register' className='text-primary'>Create a new account.</Link></p>
      <div className="divider">or</div>
        <div className='flex justify-around items-center w-full bg-white p-2 rounded-lg'>
            <p className='text-black'>Continue with</p>
        <ul className='flex gap-4'>
        <li><button onClick={handleFacebookLogin}><FaFacebook className='text-[#3b5998] text-3xl cur'/></button></li>
        <li><button onClick={handleGoogleLogin}><FaGoogle className='text-[#DB4437] text-3xl'/></button></li>
        <li><button><FaTwitter className='text-[#00acee] text-3xl'/></button></li>
      </ul>
        </div>
    </form>
        </div>
        </div>
  );
};

export default Login;