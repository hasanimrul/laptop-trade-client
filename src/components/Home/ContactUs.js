import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/contact.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
    AOS.init();
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='grid grid-cols-2 bg-cover bg-fixed container mx-auto'>
            <div className='mx-5 text-center my-auto  text-white  '>
                <div className='backdrop-brightness-75 py-20'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <h1 className='text-4xl font-bold'>Get in touch with us today</h1>
                    <p className='my-4 text-2xl'>Have Questions?</p>
                    <h2 className='text-4xl'>(123)456-7890</h2>
                    <Link type="button" className="px-8 py-3 mt-5 font-semibold rounded-b-full rounded-r-full border border-gray-400 text-white hover:bg-sky-600 hover:text-white ">Contact Us</Link>
                </div>
            </div>
            <div class=" mx-5">

                <div class="w-full p-8 my-4">
                    <div class="flex">
                        <h1 class="font-bold uppercase text-white text-5xl">Send us a message</h1>
                    </div>
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="First Name*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Last Name*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" placeholder="Phone*" />
                    </div>
                    <div class="my-4">
                        <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div class="my-2 w-1/2 lg:w-1/4">
                        <button class="uppercase text-sm font-bold tracking-wide bg-sky-600 hover:bg-gray-600 text-gray-100 p-3 rounded-lg w-full 
focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;