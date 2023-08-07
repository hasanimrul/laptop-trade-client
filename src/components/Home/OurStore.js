import React from 'react';
import { GiDeliveryDrone } from 'react-icons/gi';
import img from '../../Assets/b2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurStore = () => {
    AOS.init();
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='bg-center bg-cover text-center text-white bg-fixed mb-20 container mx-auto' >
            <div className='backdrop-brightness-50 py-48 ' >
                <GiDeliveryDrone className='mx-auto text-5xl' />
                <h1 className='text-6xl font-bold tracking-widest mb-5'>SHOP AT OUR STORE</h1>
                <p className='text-5xl text-sky-400'>Different - Definitive - Dependable</p>
            </div>
        </div>
    );
};

export default OurStore;