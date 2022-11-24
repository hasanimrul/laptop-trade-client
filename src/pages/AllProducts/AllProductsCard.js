import React from 'react';

const AllProductsCard = ({ product }) => {
    const { productName, category, price, description, year, condition, number, location, image } = product;
    return (
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
            </div>
        </div>
    );
};

export default AllProductsCard;