import { ExclamationTriangleIcon, HandThumbDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <ExclamationTriangleIcon className='w-40 h-40 text-red-500' />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
                        <span className='sr-only'>Error</span>
                        <div className='flex justify-center items-center h-full'>
                            4
                            <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-red-500'></div>
                            4
                        </div>
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        Sorry, we couldn't find this page.
                    </p>
                    <Link to='/'>
                        <button className='btn bg-gray-900 px-8 py-3 font-semibold rounded'>
                            Back to homepage
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
