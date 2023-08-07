import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M5vUiKGYxHQA34u4kvFzqA6Plcwk3bt7vCD8mHiRyfztjRhoOL7QTzXx9BW4gmu0apQL8WY3Yav2pwESQa6wT9S0046SIs8NG');
const Payment = () => {
    const booking = useLoaderData();
    const { productName, resalePrice } = booking
    const navigation = useNavigation();

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