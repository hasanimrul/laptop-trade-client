import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { saveUser } from '../../api/users';
import img from '../../Assets/register.gif'

const Signup = () => {

    const {
        createUser,
        updateUserProfile,
        loading,
        setLoading,
        signInWithGoogle,
    } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const role = event.target.role.value
        const email = event.target.email.value
        const password = event.target.password.value

        // Image Upload
        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = 'https://api.imgbb.com/1/upload?key=be0b0d03b8c433d78d3a37f669938581'

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                // Create User
                createUser(email, password)
                    .then(result => {
                        updateUserProfile(name, imageData.data.display_url)
                            .then(res => {
                                saveUser(name, email, role)
                                toast.success('Sign up Successful')
                                setLoading(false)
                                navigate(from, { replace: true })
                            }
                            )
                            .catch(err => console.log(err))
                    })

                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                    })
            })
            .catch(err => console.log(err))
    }


    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                const name = result.user.displayName
                const email = result.user.email
                const role = 'Buyer'
                saveUser(name, email, role)
                toast.success('Sign up Successful')
                setLoading(false)
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='grid grid-cols-2 items-center'>
            <div className='flex justify-center items-center my-8'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Signup</h1>
                        <p className='text-sm text-gray-400'>Create a new account</p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        noValidate=''
                        action=''
                        className='space-y-12 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>
                            <div>
                                <select name='role' className="select select-bordered w-full max-w-xs focus:outline-gray-900">
                                    <option disabled selected>Select</option>
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    required
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label htmlFor='password' className='text-sm'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    required
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-gray-900 text-gray-900'
                                />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <button
                                    type='submit'
                                    className='btn w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    {/* {loading ? <SmallSpinner /> : 'Sign Up'} */}
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <button
                            onClick={handleGoogleSignin}
                            aria-label='Log in with Google'
                            className='rounded-sm btn btn-outline my-3'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 32 32'
                                className='w-5 h-5 fill-current'
                            >
                                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                            </svg>
                        </button>

                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link to='/login' className='hover:underline text-gray-600'>
                            Log in
                        </Link>
                        .
                    </p>
                </div >
            </div >
            <div>
                <img src={img} alt='register' />
            </div>
        </div>
    );
};

export default Signup;