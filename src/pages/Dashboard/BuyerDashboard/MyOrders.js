import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBookedProducts } from '../../../api/products';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const [loading, setLoading] = useState()
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    console.log(orders);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        setLoading(true)
        getBookedProducts(user.email)
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders &&
                                    orders.map((order, i) => (
                                        <tr key={i}>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <div className='flex items-center'>
                                                    <div className='flex-shrink-0'>
                                                        <div className='block relative'>
                                                            <img
                                                                alt='profile'
                                                                src={order?.image}
                                                                className='mx-auto object-cover rounded h-10 w-15 '
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='ml-3'>
                                                        <p className='text-gray-900 whitespace-no-wrap'>{order?.productName}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                    {order?.resalePrice}
                                                </p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                    {order?.paid !== true ? <Link to={`/dashboard/payment/${order._id}`} className='btn'>Pay</Link> : <p className='font-extrabold text-green-900'>Paid</p>}
                                                </p>
                                            </td>


                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;