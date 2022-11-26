import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../../components/modal/BookNowModal';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const products = useLoaderData()
    const [allProducts, setAllProducts] = useState([])

    return (
        <div className='grid grid-cols-2'>
            {
                products.map(product => <AllProductsCard
                    key={product._id}
                    product={product}
                    setAllProducts={setAllProducts}
                />)
            }
            <BookNowModal product={allProducts} setAllProducts={setAllProducts} />
        </div>
    );
};

export default AllProducts;