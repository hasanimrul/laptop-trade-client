import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getRole } from '../api/users';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [roleLoading, setRoleLoading] = useState(true)
    useEffect(() => {
        setRoleLoading(true)
        getRole(user?.email).then(data => {
            setRole(data)
            setRoleLoading(false)
        })
    }, [user])

    if (loading || roleLoading) {
        return (
            <div className='h-screen'>
                <Spinner />
            </div>
        )
    }

    if (role === 'Seller') {
        return children
    }
    return <Navigate to='/dashboard' />
};

export default SellerRoute;