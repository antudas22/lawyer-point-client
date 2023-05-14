import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className='text-center'>
            <h2 className='text-4xl font-bold text-yellow-400'>Oops!</h2>
            <h3 className='text-error text-xl my-4'>Something Went Wrong.</h3>
            <p className='text-error'>{error.statusText || error.message}</p>
            <Link to='/' className='btn btn-primary text-white'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;