import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { deleteProduct, getAllBookings } from '../../../api/products';
import DeleteProduct from './DeleteProduct';

const ProductsDataRow = ({ product, fetchProducts }) => {
    let [isOpen, setIsOpen] = useState(false)


    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    const modalHandler = id => {
        console.log(id)
        deleteProduct(id)
            .then(data => {
                console.log(data)
                fetchProducts()
                toast.success('Product deleted')
            })
            .catch(err => console.log(err))
        closeModal()
    }
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={product?.image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>{product?.productName}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{product?.categoryName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${product?.resalePrice}</p>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {product?.paid === true ?

                    <span
                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-900 leading-tight'
                    >
                        <span
                            aria-hidden='true'
                            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Sold</span>
                    </span>
                    :
                    <span
                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                    >
                        <span
                            aria-hidden='true'
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Available</span>
                    </span>
                }
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {product?.paid === true ?

                    <span
                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-900 leading-tight'
                    >
                        <span
                            aria-hidden='true'
                            className='absolute inset-0 bg-red-500 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Not available</span>
                    </span>
                    :
                    <span
                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                    >
                        <span
                            aria-hidden='true'
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Advertise</span>
                    </span>
                }
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    onClick={openModal}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>X</span>
                </span>
                <DeleteProduct
                    isOpen={isOpen}
                    closeModal={closeModal}
                    modalHandler={modalHandler}
                    id={product._id}
                />
            </td>
        </tr>
    )
};

export default ProductsDataRow;