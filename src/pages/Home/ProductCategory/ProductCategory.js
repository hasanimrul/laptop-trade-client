import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
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
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;