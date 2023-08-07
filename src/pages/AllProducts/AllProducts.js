import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../../components/modal/BookNowModal';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const products = useLoaderData()
    const [allProducts, setAllProducts] = useState([])
    console.log(products);

    return (
        <div>
            {
                products ?
                    <div className='grid grid-cols-3 gap-5 container mx-auto'>
                        {
                            products.map(product => <AllProductsCard
                                key={product._id}
                                product={product}
                                setAllProducts={setAllProducts}
                            />)
                        }
                        <BookNowModal product={allProducts} setAllProducts={setAllProducts} />
                    </div>
                    :
                    <h1 className='text-blue-600 text-3xl'>No item is available </h1>
            }
        </div>
    );
};

export default AllProducts;