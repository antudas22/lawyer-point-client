import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import PaymentReceipt from './PaymentReceipt';

const CompletedPayments = () => {

    

    const {user, logOut} = useContext(AuthContext);
 
    const url = `https://lawyer-point-server.vercel.app/completedPayments?email=${user?.email}`

    const {data: completedPayments = [], isLoading} = useQuery({
        queryKey: ['completedPayments', user?.email],
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
        <div className='p-5 lg:p-2'>
            <h3 className='text-2xl text-center mb-4'>Completed Payments</h3>
            <div>
            {
                completedPayments.map(completedPayment => <PaymentReceipt key={completedPayment._id} completedPayment={completedPayment} />)
            }
            </div>
        </div>
    );
};

export default CompletedPayments;