import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({reserve}) => {

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const {_id, client, email, fee, lawsuit, appointmentDate, time} = reserve;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
          body: JSON.stringify({ fee }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [fee]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
    

        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            console.log(error);
            setCardError(error.message);
        }
        else{
            setCardError('');
        }
        setSuccess('');
        const {paymentIntent, error: confirmCardError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card,
                billing_details: {
                  name: client,
                  email: email
                },
              },
            },
          );
          if(confirmCardError){
            setCardError(confirmCardError.message);
            return;
          }
          if(paymentIntent.status === "succeeded"){
            const payment = {
                lawsuit,
                client,
                email,
                reserveId: _id,
                transactionID: paymentIntent.id,
                paymentMethod: paymentIntent.payment_method,
                appointmentDate,
                time,
                fee,
                successMessage: success
            }
            fetch("http://localhost:5000/payments", {
                method: 'POST', 
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    setSuccess('Your payment has been verified.Thank You.')
                }
            })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <p className='text-error mt-2'>{cardError}</p>
            <div className='flex w-full justify-end'>
                <button className='btn btn-primary w-28 text-white mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            </form>
        </div>
    );
};

export default CheckoutForm;