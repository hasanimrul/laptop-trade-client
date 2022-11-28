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
    const { productName, categoryName, price, description, year, condition, number, location, image, paid } = product;
    return (

        <div>
            {
                paid === true ?
                    <div className='hidden'></div>
                    :
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {productName}
                                <div className="badge badge-secondary">{condition}</div>
                            </h2>
                            <p>{description}</p>
                            <h2>Purchase year: {year}</h2>
                            <h2>Contact: {number}</h2>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">${price}</div>
                                <div className="badge badge-outline">{location}</div>
                            </div>
                            {role === "Buyer" ? <label htmlFor="booking-modal" onClick={() => setAllProducts(product)} className="btn">Book now</label>
                                :
                                <div className="badge badge-outline bg-red-500 text-white p-5 mx-auto">You can't order this item</div>}
                        </div>
                    </div>
            }
        </div>

    );
};

export default AllProductsCard;