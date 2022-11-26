import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, img, title, description } = category
    return (
        <div className="card mx-auto bg-base-300 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/all-products/${_id}`} className="btn btn-primary">See all</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;