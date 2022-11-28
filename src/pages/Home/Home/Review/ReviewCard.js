import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, description, img, location } = review;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                </div>
                <div className="p-5 flex gap-8">
                    <figure className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </figure>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;