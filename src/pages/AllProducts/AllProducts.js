import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const products = useLoaderData()

    return (
        <div className='grid grid-cols-2'>
            {
                products.map(product => <AllProductsCard
                    key={product._id}
                    product={product}
                />)
            }
        </div>
    );
};

export default AllProducts;