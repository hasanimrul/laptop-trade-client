import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { deleteUser, getAllUsers } from '../../../api/users';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';
import DeleteUser from './DeleteUser';

const AllSellers = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const role = 'Seller'
    console.log(users);
    useEffect(() => {
        getUsers(role)
    }, [])

    const getUsers = (role) => {
        setLoading(true)
        getAllUsers(role)
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }

    let [isOpen, setIsOpen] = useState(false)
    const fetchUsers = () => getAllUsers(role).then(data => setUsers(data))

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    const modalHandler = id => {
        console.log(id)
        deleteUser(id)
            .then(data => {
                console.log(data)
                fetchUsers()
                toast.success('User deleted')
            })
            .catch(err => console.log(err))
        closeModal()
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
                                        Email
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Role
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
                                {users &&
                                    users.map((user, i) => (
                                        <tr key={i}>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                    {user.email}
                                                </p>
                                            </td>

                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                    {user?.role}
                                                </p>
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
                                                    <span className='relative'>Delete</span>
                                                </span>
                                                <DeleteUser
                                                    isOpen={isOpen}
                                                    closeModal={closeModal}
                                                    modalHandler={modalHandler}
                                                    id={user._id}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AllSellers;