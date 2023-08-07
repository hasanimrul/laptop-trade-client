import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://laptop-trade-server.vercel.app/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className='my-40 container mx-auto'>
            <h3 className='px-3 font-bold uppercase  text-5xl mb-20 text-center'>
                Shop by Category
            </h3>
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