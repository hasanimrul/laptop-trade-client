import React from 'react';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';

const AddProductsForm = ({ handleSubmit, loading }) => {
    return (
        <>
            <div className='flex justify-center mt-6'>
                <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
                    <form
                        onSubmit={handleSubmit}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='name' className='block text-gray-600'>
                                Product Name
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                name='name'
                                id='name'
                                type='text'
                                placeholder='Type product name'
                                required
                            />
                        </div>
                        <select name='category' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900 w-full">
                            <option disabled selected>Category</option>
                            <option>Electronics-647303cc8ecda4c9fae8ed9b</option>
                            <option>Fashion-647303cc8ecda4c9fae8ed9c</option>
                            <option>Home & Kitchen-647303cc8ecda4c9fae8ed9d</option>
                            <option>Books-647303cc8ecda4c9fae8ed9e</option>
                            <option>Sports & Outdoors-647303cc8ecda4c9fae8ed9f</option>
                            <option>Beauty & Personal Care-647303cc8ecda4c9fae8eda0</option>
                        </select>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='originalPrice' className='block text-gray-600'>
                                Original Price
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                name='originalPrice'
                                id='price'
                                type='text'
                                placeholder='$$$'
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='resalePrice' className='block text-gray-600'>
                                Resale Price
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                name='resalePrice'
                                id='price'
                                type='text'
                                placeholder='$$$'
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md w-full px-3 py-2 border  border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900 '
                                name='description'
                                placeholder='type here..'
                            ></textarea>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='year' className='block text-gray-600'>
                                Year of purchase
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                name='year'
                                id='year'
                                type='text'
                                placeholder='Enter year'
                                required
                            />
                        </div>
                        <select name='condition' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900 w-full">
                            <option disabled selected>Condition</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='number' className='block text-gray-600'>
                                Number
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                name='number'
                                id='number'
                                type='text'
                                placeholder='Phone number'
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Location
                            </label>
                            <input
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                name='location'
                                id='location'
                                type='text'
                                placeholder='Enter location'
                                required
                            />
                        </div>



                        <div className='flex space-x-4 items-center'>
                            <label
                                htmlFor='image'
                                className='p-3 text-center rounded-md  text-gray-500 font-bold border    '
                            >
                                <input
                                    type='file'
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                />
                            </label>
                        </div>



                        <button
                            type='submit'
                            className='block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-500 hover:text-gray-100 focus:shadow-outline focus:outline-none'
                        >
                            {loading ? <SmallSpinner /> : 'Save & Continue'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProductsForm;