import React, { useContext, useState } from 'react'
import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import AdminMenu from './AdminMenu'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import SellerMenu from './SellerMenu'
import BuyerMenu from './BuyerMenu'


const Sidebar = ({ role, loading }) => {
    const { user, logOut } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>iMart</Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
                >
                    <Bars3Icon className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <h2 className='text-3xl cursor-pointer font-semibold text-center text-gray-800 '>
                            <Link to='/'> iMart</Link>
                        </h2>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {
                                role && role !== 'Admin' ?
                                    <>
                                        {role === 'Buyer' ? <BuyerMenu /> : <SellerMenu />}
                                    </>
                                    : <AdminMenu />
                            }
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <Link
                        to='/'
                        onClick={logOut}
                        classes='flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform'
                    >
                        <div className='flex justify-center items-center p-3 hover:bg-slate-600 hover:text-white'>
                            <ArrowRightOnRectangleIcon className='w-5 h-5' />
                            <span className='mx-4 font-medium'>Logout</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar;