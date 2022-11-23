import React from 'react';
import App from '../../../App';
import Apple from './Apple';
import Asus from './Asus';
import Lenovo from './Lenovo';

const ProductCategory = () => {
    return (
        <div className='my-10'>
            <div className='flex items-center my-8 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-3xl dark:text-gray-400'>
                    Products Category
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Apple />
                <Asus />
                <Lenovo />
            </div>
        </div>
    );
};

export default ProductCategory;