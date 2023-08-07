import React from 'react';
import { BiMap, BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className='grid grid-cols-3 items-center my-3'>
            <div className='flex items-center gap-2'>
                <Link to='/' className='text-4xl font-bold'><span className='text-sky-500'>i</span>Mart</Link>
            </div>
            <div className=''>
                <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-4 pl-2 pr-96 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search here.." type="text" name="search" />
                </label>
            </div>
            <div className='flex items-center justify-end gap-5'>
                <div className='flex items-center gap-2 ml-5'>
                    <BiMap className='text-2xl' />
                    <div>
                        <p className='text-sm'>Email</p>
                        <p className='font-bold text-sky-500'>contact@imart.com</p>
                    </div>

                </div>
                <div className='flex items-center gap-2 ml-5'>
                    <FiPhoneCall className='text-2xl' />
                    <div>
                        <p className='text-sm'>Hotline</p>
                        <p className='font-bold text-sky-500'>1900-6789</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TopNav;