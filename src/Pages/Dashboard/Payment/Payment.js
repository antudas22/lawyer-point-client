import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const reserve = useLoaderData();
    const navigation = useNavigation();
    const {lawsuit, client, email, appointmentDate, time, fee, } = reserve;

    if(navigation.status === "loading"){
        return <Loading/>
    }
    return (
        <div className='p-2'>
            <h3 className='text-2xl text-center mb-4'>Payment</h3>
            <div className='flex flex-col gap-3 w-full max-w-lg mx-auto rounded-xl p-8 shadow-2xl'>
                <h3 className='text-2xl'>Lawsuit: {lawsuit}</h3>
                <p className='font-bold'>Client Name: {client}</p>
                <p className='font-bold'>Client Email: {email}</p>
                <p>Date: {appointmentDate}</p>
                <p>Time: {time}</p>
                <p className='text-lg font-bold text-info'>Consultancy Fee: ${fee}</p>
                <div className='my-3'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    reserve={reserve}
                    />
                </Elements>
                </div>
            </div>

            {/* {
                paymentIntention.status === "succeeded" &&
                <div className='my-10'>
                    <h3 className='text-2xl text-center mb-4'>Payment Receipt</h3>
                <div className='relative flex flex-col gap-3 w-full max-w-lg mx-auto rounded-xl p-8 shadow-2xl'>
                <h3 className='text-2xl'>Lawsuit: {lawsuit}</h3>
                    <p className='font-bold'>Client Name: {client}</p>
                    <p className='font-bold'>Client Email: {email}</p>
                    <p>Transaction ID: {paymentIntention.id}</p>
                    <p>Payment Method: {paymentIntention.payment_method}</p>
                    <p>Payment Method Type: {paymentIntention.payment_method_types}</p>
                    <p>Appointment Date: {appointmentDate}</p>
                    <p>Time: {time}</p>
                    <p className='text-lg font-bold text-info'>Consultancy Fee: ${fee}</p>
                    <p>Your payment for {lawsuit} has been verified.Thank You.</p>
                    <div
                        className="flex justify-end items-end uppercase text-2xl font-serif text-gray-500"
                    >
                        Lawyer
                        <span className="text-5xl text-primary">
                        <GoLaw/>
                        </span>
                        Point
                    </div>
                    <span className='absolute top-3 right-3 text-2xl'><FiDownload/></span>
                </div>
                </div>
            } */}
        </div>
    );
};

export default Payment;