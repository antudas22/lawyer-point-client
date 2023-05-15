import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { GoLaw } from 'react-icons/go';
import { FiDownload } from "react-icons/fi";

const CompletedPayments = () => {

    const {user, logOut} = useContext(AuthContext);
 
    const url = `http://localhost:5000/completedPayments?email=${user?.email}`

    const {data: completedpayments = [], isLoading} = useQuery({
        queryKey: ['completedpayments', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if(res.status === 401 || res.status === 403){
              return logOut();
            }
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='p-2'>
            <h3 className='text-2xl text-center mb-4'>Completed Payments</h3>
            {
                completedpayments.map(completedpayment => <div
                key={completedpayment._id} className='relative flex flex-col gap-3 w-full max-w-lg mx-auto rounded-xl p-8 shadow-xl mb-10'>
                <h3 className='text-2xl'>Lawsuit: {completedpayment.lawsuit}</h3>
                <p className='font-bold'>Client Name: {completedpayment.client}</p>
                <p className='font-bold'>Client Email: {completedpayment.email}</p>
                <p>Transaction ID: {completedpayment.transactionID}</p>
                <p>Payment Method: {completedpayment.paymentMethod}</p>
                <p>Appointment Date: {completedpayment.appointmentDate}</p>
                <p>Appointment Time: {completedpayment.time}</p>
                <p className=''>Consultancy Fee: ${completedpayment.fee}</p>
                <p className='mt-2'>Your payment has been verified. You must have this receipt when you meet our lawyer. Thank You.</p>
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
            </div>)
            }
        </div>
    );
};

export default CompletedPayments;