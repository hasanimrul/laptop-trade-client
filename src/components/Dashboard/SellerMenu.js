import { PlusCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <>
            <NavLink
                to='manage-products'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <ChevronDoubleRightIcon className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Product</span>
            </NavLink>

            <NavLink
                to='add-products'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <PlusCircleIcon className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add Product</span>
            </NavLink>
        </>

    );
};

export default SellerMenu;