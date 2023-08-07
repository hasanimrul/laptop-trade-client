import React from 'react';
import img1 from '../../Assets/delivery-truck.gif'
import img2 from '../../Assets/credit-card.gif'
import img3 from '../../Assets/return.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FreeShipping = () => {
    AOS.init();
    return (
        <div className='grid grid-cols-3 shadow-md my-40 container mx-auto'>
            <div data-aos="zoom-in" className='flex flex-col items-center border-r pb-12' >
                <img src={img1} className='w-1/4' alt='' />
                <h3 className='text-2xl font-bold text-center mb-2'>Free Shipping</h3>
                <p className='text-center'>All orders of $49 or more of eligible items across any product category qualify.</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center border-r pb-12' >
                <img src={img2} className='w-1/4' alt='' />
                <h3 className='text-2xl font-bold text-center mb-2'>Credit Cards</h3>
                <p className='text-center'>We accept Carte Blanche. Diners Club,Discover Master Card, Visa and American Express.</p>
            </div>
            <div data-aos="zoom-in" className='flex flex-col items-center pb-12' >
                <img src={img3} className='w-1/4' alt='' />
                <h3 className='text-2xl font-bold text-center mb-2'>Return Policy</h3>
                <p className='text-center'>At iMart Shop you are entitled to return goods for refund or exchange within 14 days after receiving your order.</p>
            </div>
        </div>
    );
};

export default FreeShipping;