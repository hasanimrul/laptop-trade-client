import React, { useContext, useEffect, useState } from 'react';
import { getRole } from '../../api/users';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllProductsCard = ({ product, setAllProducts }) => {
    const { user } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    useEffect(() => {
        getRole(user?.email)
            .then(data => {
                setRole(data)
            })
    }, [user])
    const { sellerName, productName, categoryName, resalePrice, originalPrice, description, year, condition, number, location, image, paid } = product;
    return (

        <div>
            {
                paid === true ?
                    <></>
                    :
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10"><img src={image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {productName}
                                <span className='text-sm'>Condition:</span><div className="badge badge-secondary">{condition}</div>
                            </h2>
                            <p>{description}</p>
                            <div className='flex justify-between items-center gap-5'>
                                <h2>Purchase year: {year}</h2>
                                <h2>Seller:{sellerName}</h2>
                            </div>
                            <div className='flex justify-between items-center gap-5'>
                                <h2>Original Price: {originalPrice}</h2>
                                <h2>Resale Price: {resalePrice}</h2>
                            </div>
                            <div className="card-actions justify-between items-center">
                                <span>Number:</span><div className="badge badge-outline">{number}</div>
                                Location:<div className="badge badge-outline">{location}</div>
                            </div>
                            {role === "Buyer" ? <label htmlFor="booking-modal" onClick={() => setAllProducts(product)} className="btn btn-primary">Book now</label>
                                :
                                <div className="badge badge-outline bg-red-500 text-white p-5 mx-auto">You can't order this item</div>}
                        </div>
                    </div>
            }
        </div>

    );
};

export default AllProductsCard;