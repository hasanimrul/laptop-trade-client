import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { getBookedProducts } from '../../../api/products';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const { productName, resalePrice } = booking
    const navigation = useNavigation();

    const [loading, setLoading] = useState()
    // const [orders, setOrders] = useState([])
    // const { user } = useContext(AuthContext)
    // console.log(orders);

    // useEffect(() => {
    //     getProducts()
    // }, [])

    // const getProducts = () => {
    //     setLoading(true)
    //     getBookedProducts(user.email)
    //         .then(data => {
    //             setOrders(data)
    //             setLoading(false)
    //         })
    // }
    if (navigation.state === 'loading') {
        return <Spinner />
    }

    return (
        <div>
            <h2 className='text-3xl'>Payment for {productName}</h2>
            <p className='text-xl'>Please pay ${resalePrice} </p>

            <div className='my-6 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;