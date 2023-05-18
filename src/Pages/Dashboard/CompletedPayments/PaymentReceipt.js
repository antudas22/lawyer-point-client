import React, { useRef } from 'react';

import {useReactToPrint} from 'react-to-print';
import { GoLaw } from 'react-icons/go';
import { FiDownload } from "react-icons/fi";

const PaymentReceipt = ({completedPayment}) => {
    const {lawsuit, client, email, transactionID, paymentMethod, appointmentDate, time, fee} = completedPayment;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'payment-receipt'
    })
    return (
        <div>
            <div ref={componentRef}
            className='relative flex flex-col gap-3 w-full max-w-lg mx-auto rounded-xl p-8 shadow-xl mb-10'>
                <h3 className='text-2xl'>Lawsuit: {lawsuit}</h3>
                <p className='font-bold'>Client Name: {client}</p>
                <p className='font-bold'>Client Email: {email}</p>
                <p>Transaction ID: {transactionID}</p>
                <p>Payment Method: {paymentMethod}</p>
                <p>Appointment Date: {appointmentDate}</p>
                <p>Appointment Time: {time}</p>
                <p className=''>Consultancy Fee: ${fee}</p>
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
                   <button onClick={handlePrint}>
                    <span className='absolute top-3 right-3 text-2xl'><FiDownload/></span>
                   </button>
            </div>
        </div>
    );
};

export default PaymentReceipt;