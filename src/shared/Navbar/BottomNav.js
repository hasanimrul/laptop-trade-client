import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    const { logOut, user } = useContext(AuthContext)

    const handlesignOut = () => {
        logOut()
            .then(res => { })
            .catch(err => { })
    }
    return (
        <header className=''>

            <div className="border-t border-gray-200">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-around h-16 lg:h-20">
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <Link to="/" title="" className="text-base font-medium text-black hover:bg-gray-300 hover:rounded p-2"> Home </Link>

                            <Link to="/all-products" title="" className="text-base font-medium text-black hover:bg-gray-300 hover:rounded p-2"> All Collection </Link>

                            <Link to="/" title="" className="text-base font-medium text-black hover:bg-gray-300 hover:rounded p-2"> About Us </Link>

                            <Link to="/" title="" className="text-base font-medium text-black hover:bg-gray-300 hover:rounded p-2"> Contact Us </Link>
                        </div>


                        <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            {
                                user?.email ?
                                    <div>
                                        <Link to="/dashboard" title="" className="font-medium text-black mr-5 hover:bg-gray-300 hover:rounded p-2">Dashboard</Link>
                                        <Link onClick={handlesignOut} to="/login" title="" className="font-medium text-black hover:bg-gray-300 hover:rounded p-2"> Sign Out </Link>
                                    </div>
                                    :
                                    <div>
                                        <Link to="/signup" title="" className="font-medium text-black mr-5 hover:bg-gray-300 hover:rounded p-2"> Sign up </Link>

                                        <Link to="/login" title="" className="font-medium text-black hover:bg-gray-300 hover:rounded p-2"> Sign in </Link>
                                    </div>
                            }


                        </div>
                    </nav>
                </div>
            </div>

            <nav className="py-4 bg-white lg:hidden">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-around">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col space-y-2">
                            <Link to="/" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Home </Link>

                            <Link to="/" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> All Collection </Link>

                            <Link to="/" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Drones </Link>

                            <Link to="/" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Accessories </Link>
                        </div>

                        <hr className="my-4 border-gray-200" />

                        <div className="flex flex-col space-y-2">
                            <Link to="/" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign up </Link>

                            <Link to="/" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign in </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default BottomNav;